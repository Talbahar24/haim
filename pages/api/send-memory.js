const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Parse form data (for file upload)
  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), 'public', 'uploads'),
    keepExtensions: true,
    multiples: false,
  });

  // Ensure uploads dir exists
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error parsing form data' });
    }

    // Prepare new memory object
    const newMemory = {
      name: fields.name || '',
      email: fields.email || '',
      relationship: fields.relationship || '',
      memory: fields.memory || '',
      date: new Date().toISOString().slice(0, 10),
    };

    // Handle photo if exists
    if (files.photo && files.photo.size > 0) {
      const photoFile = files.photo;
      const ext = path.extname(photoFile.originalFilename || photoFile.newFilename);
      const fileName = `memory_${Date.now()}${ext}`;
      const destPath = path.join(uploadsDir, fileName);
      fs.renameSync(photoFile.filepath, destPath);
      newMemory.photo = `/uploads/${fileName}`;
    }

    // Read existing memories
    const memoriesPath = path.join(process.cwd(), 'public', 'memories.json');
    let memories = [];
    if (fs.existsSync(memoriesPath)) {
      const data = fs.readFileSync(memoriesPath, 'utf-8');
      try {
        memories = JSON.parse(data);
      } catch (e) {
        memories = [];
      }
    }
    // Add new memory
    memories.unshift(newMemory);
    // Save back to file
    fs.writeFileSync(memoriesPath, JSON.stringify(memories, null, 2), 'utf-8');

    return res.status(200).json({ message: 'Memory saved successfully' });
  });
} 