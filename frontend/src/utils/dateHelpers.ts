
const getFormattedDateString = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0'); 
  const d = String(date.getDate()).padStart(2, '0');
  
  return `${y}-${m}-${d}`;
};

export const isToday = (taskDateStr: string): boolean => {
  const todayStr = getFormattedDateString(new Date());
  return taskDateStr === todayStr;
};

export const isThisWeek = (taskDateStr: string): boolean => {
  const today = new Date();
  
  const currentDay = today.getDay() === 0 ? 6 : today.getDay() - 1; 

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDay);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const taskDate = new Date(taskDateStr);
  return taskDate >= startOfWeek && taskDate <= endOfWeek;
};

export const isThisMonth = (taskDateStr: string): boolean => {
  const today = new Date();
  const taskDate = new Date(taskDateStr);
  return (
    taskDate.getMonth() === today.getMonth() &&
    taskDate.getFullYear() === today.getFullYear()
  );
};