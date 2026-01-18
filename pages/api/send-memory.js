const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to sanitize input
function sanitizeInput(str) {
  if (!str) return '';
  return String(str)
    .trim()
    .replace(/[<>]/g, ''); // Remove potential HTML tags
}

// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Parse form data (for file upload)
  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), 'public', 'uploads'),
    keepExtensions: true,
    multiples: false,
    maxFileSize: 5 * 1024 * 1024, // 5MB max file size
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
    // formidable returns fields as arrays, so we need to extract the first value
    const name = sanitizeInput(Array.isArray(fields.name) ? fields.name[0] : (fields.name || ''));
    const email = sanitizeInput(Array.isArray(fields.email) ? fields.email[0] : (fields.email || ''));
    const relationship = sanitizeInput(Array.isArray(fields.relationship) ? fields.relationship[0] : (fields.relationship || ''));
    const memory = sanitizeInput(Array.isArray(fields.memory) ? fields.memory[0] : (fields.memory || ''));

    // Validation
    if (!name || name.length < 2) {
      return res.status(400).json({ message: 'שם חייב להכיל לפחות 2 תווים' });
    }
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ message: 'כתובת אימייל לא תקינה' });
    }
    if (!relationship || relationship.length < 2) {
      return res.status(400).json({ message: 'קשר חייב להכיל לפחות 2 תווים' });
    }
    if (!memory || memory.length < 10) {
      return res.status(400).json({ message: 'זיכרון חייב להכיל לפחות 10 תווים' });
    }
    if (memory.length > 5000) {
      return res.status(400).json({ message: 'זיכרון ארוך מדי (מקסימום 5000 תווים)' });
    }

    const newMemory = {
      name,
      email,
      relationship,
      memory,
      date: new Date().toISOString().slice(0, 10),
    };

    // Handle photo if exists
    if (files.photo && files.photo.size > 0) {
      const photoFile = files.photo;
      
      // Validate file size (5MB max)
      if (photoFile.size > 5 * 1024 * 1024) {
        // Clean up uploaded file
        if (fs.existsSync(photoFile.filepath)) {
          fs.unlinkSync(photoFile.filepath);
        }
        return res.status(400).json({ message: 'קובץ התמונה גדול מדי (מקסימום 5MB)' });
      }

      // Validate file type
      const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
      const ext = path.extname(photoFile.originalFilename || photoFile.newFilename).toLowerCase();
      
      if (!allowedExtensions.includes(ext)) {
        // Clean up uploaded file
        if (fs.existsSync(photoFile.filepath)) {
          fs.unlinkSync(photoFile.filepath);
        }
        return res.status(400).json({ message: 'סוג קובץ לא נתמך. אנא העלה תמונה בפורמט JPG, PNG, GIF או WebP' });
      }

      // Validate MIME type
      const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
      if (photoFile.mimetype && !allowedMimeTypes.includes(photoFile.mimetype.toLowerCase())) {
        // Clean up uploaded file
        if (fs.existsSync(photoFile.filepath)) {
          fs.unlinkSync(photoFile.filepath);
        }
        return res.status(400).json({ message: 'סוג קובץ לא תקין' });
      }

      const fileName = `memory_${Date.now()}${ext}`;
      const destPath = path.join(uploadsDir, fileName);
      
      try {
        fs.renameSync(photoFile.filepath, destPath);
        newMemory.photo = `/uploads/${fileName}`;
      } catch (error) {
        console.error('Error saving file:', error);
        return res.status(500).json({ message: 'שגיאה בשמירת התמונה' });
      }
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