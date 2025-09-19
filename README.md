# 🥭 Ai-See - AI Mango Ripeness Detection

แอปพลิเคชันตรวจสอบความสุกของมะม่วงด้วยเทคโนโลยี AI ที่พัฒนาด้วย React และ Vite

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-green?style=for-the-badge&logo=vercel)](https://ai-see.vercel.app/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://ai-see.vercel.app/)

## 🌟 Features

- **AI Image Analysis**: วิเคราะห์ภาพมะม่วงเพื่อตรวจสอบความสุก
- **Real-time Processing**: ประมวลผลแบบเรียลไทม์
- **Modern UI**: อินเทอร์เฟซที่สวยงามและใช้งานง่าย
- **Responsive Design**: รองรับทุกขนาดหน้าจอ
- **Fast Performance**: โหลดเร็วด้วย Vite

## 🚀 Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13
- **Icons**: Lucide React
- **Routing**: React Router DOM 7.9.1
- **Linting**: ESLint

## 📁 Project Structure

```
client/
├── components/           # React Components
│   ├── About.jsx        # หน้าเกี่ยวกับ
│   ├── AnalysisResult.jsx # แสดงผลการวิเคราะห์
│   ├── Features.jsx     # คุณสมบัติ
│   ├── Footer.jsx       # Footer
│   ├── Header.jsx       # Header
│   ├── Hero.jsx         # Hero Section
│   ├── ImageUpload.jsx  # อัปโหลดรูปภาพ
│   └── Testimonial.jsx  # คำรับรอง
├── pages/               # หน้าเว็บ
│   ├── Ai.jsx          # หน้า AI Analysis
│   └── Home.jsx        # หน้าหลัก
├── src/                # Source Code
│   ├── App.jsx         # Main App Component
│   ├── main.jsx        # Entry Point
│   └── index.css       # Global Styles
├── public/             # Static Assets
└── dist/               # Build Output
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm หรือ yarn

### 1. Clone Repository
```bash
git clone <repository-url>
cd Ai-See
```

### 2. Install Dependencies
```bash
cd client
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

แอปจะทำงานที่ `http://localhost:5173`

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | เริ่ม development server |
| `npm run build` | Build สำหรับ production |
| `npm run preview` | Preview production build |
| `npm run lint` | ตรวจสอบโค้ดด้วย ESLint |
| `npm run lint:fix` | แก้ไข ESLint errors อัตโนมัติ |
| `npm run clean` | ลบโฟลเดอร์ dist |

## 🎯 How to Use

### 1. เข้าหน้าเว็บ
- **🌐 Live Demo**: เปิดเบราว์เซอร์ไปที่ [https://ai-see.vercel.app/](https://ai-see.vercel.app/)
- **💻 Local Development**: เปิดเบราว์เซอร์ไปที่ `http://localhost:5173`
- คลิกที่ "เริ่มใช้งาน" หรือไปที่ `/ai`

### 2. อัปโหลดรูปภาพ
- คลิกที่พื้นที่อัปโหลดรูปภาพ
- เลือกรูปภาพมะม่วงที่ต้องการตรวจสอบ
- รองรับไฟล์: JPG, PNG, GIF

### 3. วิเคราะห์ผลลัพธ์
- คลิกปุ่ม "วิเคราะห์"
- รอระบบประมวลผล (ประมาณ 2 วินาที)
- ดูผลลัพธ์การตรวจสอบความสุก

## 🔧 Configuration

### Environment Variables
สร้างไฟล์ `.env` ในโฟลเดอร์ `client/`:

```env
VITE_API_URL=http://localhost:8000
VITE_APP_NAME=Ai-See
```

### Tailwind CSS
การตั้งค่า Tailwind CSS อยู่ในไฟล์ `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## 🎨 Customization

### สีธีม
แก้ไขสีธีมในไฟล์ `src/index.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

### Components
- แก้ไข components ในโฟลเดอร์ `components/`
- เพิ่มหน้าใหม่ในโฟลเดอร์ `pages/`
- อัปเดต routing ใน `src/App.jsx`

## 🌐 Live Demo

**🚀 แอปพลิเคชันพร้อมใช้งานแล้ว!**

👉 **[https://ai-see.vercel.app/](https://ai-see.vercel.app/)** 👈

ทดลองใช้งานการตรวจสอบความสุกของมะม่วงด้วย AI ได้ทันที!

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

ไฟล์ที่ build จะอยู่ในโฟลเดอร์ `dist/`

### Deploy to Static Hosting
- **Vercel**: `vercel --prod` ✅ **Deployed!**
- **Netlify**: อัปโหลดโฟลเดอร์ `dist/`
- **GitHub Pages**: ใช้ GitHub Actions

### Docker Deployment
```bash
# Build Docker image
docker build -t ai-see .

# Run container
docker run -p 80:80 ai-see
```

## 🧪 Testing

### Manual Testing
1. ทดสอบการอัปโหลดรูปภาพ
2. ทดสอบการวิเคราะห์ผลลัพธ์
3. ทดสอบ responsive design
4. ทดสอบ performance

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🐛 Troubleshooting

### ปัญหาที่พบบ่อย

**1. ไม่สามารถอัปโหลดรูปภาพได้**
- ตรวจสอบขนาดไฟล์ (ควรไม่เกิน 10MB)
- ตรวจสอบประเภทไฟล์ (JPG, PNG, GIF เท่านั้น)

**2. Build ไม่สำเร็จ**
```bash
# ลบ node_modules และติดตั้งใหม่
rm -rf node_modules package-lock.json
npm install
```

**3. ESLint Errors**
```bash
# แก้ไขอัตโนมัติ
npm run lint:fix
```

## 🤝 Contributing

1. Fork โปรเจค
2. สร้าง feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add some AmazingFeature'`)
4. Push ไปยัง branch (`git push origin feature/AmazingFeature`)
5. เปิด Pull Request

## 📝 License

โปรเจคนี้ใช้ license: MIT License

## 👥 Team

- **Developer**: [Your Name]
- **Designer**: [Designer Name]
- **AI Specialist**: [AI Expert Name]

## 📞 Contact

- **Email**: your.email@example.com
- **GitHub**: [@BossSetthapong](https://github.com/Setthapong-dev)
- **Live Demo**: [https://ai-see.vercel.app/](https://ai-see.vercel.app/)

## 🙏 Acknowledgments

- React Team สำหรับ React framework
- Vite Team สำหรับ build tool ที่เร็ว
- Tailwind CSS สำหรับ utility-first CSS framework
- Lucide สำหรับ icon set ที่สวยงาม

---

⭐ **หากโปรเจคนี้มีประโยชน์ กรุณาให้ดาวน์โหลด!** ⭐
