import type { Task } from "../types/types";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Review Design System",
    description: "Check typography and color contrast for DAILIST app.",
    date: "2026-05-27",
    startTime: "06:52",
    endTime: "08:30",
    location: "Office",
    completed: false, 
    important: true,
  },
  {
    id: "2",
    title: "Team Meeting",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    date: "2026-05-28", // ใช้ฟอร์แมต YYYY-MM-DD เพื่อเอาไปเช็ค Today/This Week ง่ายๆ
    startTime: "10:30",
    endTime: "13:00",
    location: "My home",
    completed: false,    // false = Active, true = Completed
    important: true,     // true = แยกไปอยู่กล่อง Important
  },
  {
    id: "3",
    title: "Work on Branding",
    description: "Check typography and color contrast for DAILIST app.",
    date: "2026-05-28", // ใช้ฟอร์แมต YYYY-MM-DD เพื่อเอาไปเช็ค Today/This Week ง่ายๆ
    startTime: "11:00",
    endTime: "16:30",
    location: "My home",
    completed: false,    // false = Active, true = Completed
    important: false,     // true = แยกไปอยู่กล่อง Important
  },
  {
    id: "4",
    title: "Play Badminton",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    date: "2026-05-29", // ใช้ฟอร์แมต YYYY-MM-DD เพื่อเอาไปเช็ค Today/This Week ง่ายๆ
    startTime: "16:00",
    endTime: "21:30",
    location: "Gym",
    completed: false,    // false = Active, true = Completed
    important: false,     // true = แยกไปอยู่กล่อง Important
  },
  {
    id: "5",
    title: "Buy groceries for dinner",
    description: "Check typography and color contrast for DAILIST app.",
    date: "2026-05-30", // ใช้ฟอร์แมต YYYY-MM-DD เพื่อเอาไปเช็ค Today/This Week ง่ายๆ
    startTime: "11:00",
    endTime: "12:00",
    location: "Market",
    completed: false,    // false = Active, true = Completed
    important: false,     // true = แยกไปอยู่กล่อง Important
  },
  {
    id: "6",
    title: "Buy groceries for dinner",
    description: "Check typography and color contrast for DAILIST app.",
    date: "2026-05-30", // ใช้ฟอร์แมต YYYY-MM-DD เพื่อเอาไปเช็ค Today/This Week ง่ายๆ
    startTime: "00:00",
    endTime: "12:00",
    location: "Market",
    completed: false,    // false = Active, true = Completed
    important: false,     // true = แยกไปอยู่กล่อง Important
  },
  {
    id: "7",
    title: "Buy groceries for dinner",
    description: "Check typography and color contrast for DAILIST app.",
    date: "2026-05-30", // ใช้ฟอร์แมต YYYY-MM-DD เพื่อเอาไปเช็ค Today/This Week ง่ายๆ
    startTime: "14:00",
    endTime: "22:00",
    location: "Market",
    completed: false,    // false = Active, true = Completed
    important: false,     // true = แยกไปอยู่กล่อง Important
  },
  {
    id: "8",
    title: "Buy groceries for dinner",
    description: "Check typography and color contrast for DAILIST app.",
    date: "2026-05-30", // ใช้ฟอร์แมต YYYY-MM-DD เพื่อเอาไปเช็ค Today/This Week ง่ายๆ
    startTime: "23:59",
    endTime: "10:00",
    location: "Market",
    completed: false,    // false = Active, true = Completed
    important: false,     // true = แยกไปอยู่กล่อง Important
  },
  {
    id: "9",
    title: "Buy groceries for dinner",
    description: "Check typography and color contrast for DAILIST app.",
    date: "2026-05-30", // ใช้ฟอร์แมต YYYY-MM-DD เพื่อเอาไปเช็ค Today/This Week ง่ายๆ
    startTime: "19:20",
    endTime: "23:40",
    location: "Market",
    completed: false,    // false = Active, true = Completed
    important: false,     // true = แยกไปอยู่กล่อง Important
  },
  {
    id: "10",
    title: "Buy groceries for dinner",
    description: "Check typography and color contrast for DAILIST app.",
    date: "2026-05-30", // ใช้ฟอร์แมต YYYY-MM-DD เพื่อเอาไปเช็ค Today/This Week ง่ายๆ
    startTime: "05:20",
    endTime: "07:55",
    location: "Market",
    completed: false,    // false = Active, true = Completed
    important: false,     // true = แยกไปอยู่กล่อง Important
  },

];