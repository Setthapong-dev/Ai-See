import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  try {
    // 1. ดึง token จาก header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // 2. แยก token ออกจาก Bearer
    const token = authHeader.split(' ')[1];

    // 3. ตรวจสอบ token ว่าถูกต้องไหม
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. เก็บข้อมูล user ที่ถอดรหัสได้ไว้ใน req.user
    req.user = decoded;

    // 5. ผ่าน middleware ไป controller ถัดไป
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

