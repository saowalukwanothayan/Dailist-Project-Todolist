# Dailist — Full-stack To-do List Application

แอปพลิเคชันจัดการรายการสิ่งที่ต้องทำในชีวิตประจำวัน พัฒนาขึ้นเพื่อศึกษาและทดลองระบบ CRUD Operations ระหว่างหน้าบ้าน หลังบ้าน และ Cloud Database แบบครบวงจร

> 🔗 **[ลองใช้งานจริงได้ที่นี่](#)**

---
## ✨ Features

- **Task Management** — เพิ่ม, แก้ไข, ลบ และอัปเดตสถานะงานได้แบบ Real-time
- **Data Persistence** — ข้อมูลจัดเก็บและซิงค์อยู่บน Cloud Database จริง ไม่สูญหายแม้จะรีเฟรชหน้าเว็บ
- **Task Filtering** — จัดหมวดหมู่งานตามความสำคัญ และกำหนดการแสดงผลแบบรายวัน / รายสัปดาห์ / รายเดือน

---
## 🛠 Tech Stack

### Frontend
| เทคโนโลยี | บทบาท |
|---|---|
| React (Vite) | ขึ้นโครงสร้าง Single Page Application |
| TypeScript | ควบคุมประเภทข้อมูลเพื่อลดข้อผิดพลาดฝั่ง Client |
| Axios | จัดการการรับส่งข้อมูลผ่าน HTTP Request ไปยัง API |

### Backend & Database
| เทคโนโลยี | บทบาท |
|---|---|
| Node.js + Express.js (TypeScript) | สร้าง RESTful API สื่อสารข้อมูล |
| PostgreSQL (Neon) | Relational Database จัดเก็บข้อมูลบน Cloud |

---

## 🚀 วิธีรันโปรเจกต์บนเครื่องตัวเอง

### 1. Clone โปรเจกต์

```bash
git clone https://github.com/saowalukwanothayan/Dailist-Project-Todolist.git
cd Dailist-Project-Todolist
```

### 2. ตั้งค่า Backend

```bash
cd backend
npm install
```

สร้างไฟล์ `.env` ในโฟลเดอร์ `backend` แล้วเพิ่มค่าต่อไปนี้:

```env
DATABASE_URL=your_postgres_connection_string
```

จากนั้นรัน:

```bash
npm run dev
```

### 3. ตั้งค่า Frontend

```bash
cd ../frontend
npm install
npm run dev
```

เปิดเบราว์เซอร์แล้วไปที่ `http://localhost:5173`
