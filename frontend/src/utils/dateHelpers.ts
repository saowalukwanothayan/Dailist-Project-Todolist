
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
  today.setHours(0,0,0,0);
  
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);
  nextWeek.setHours(23,59,59,999);

  const taskDate = new Date(taskDateStr);
  return taskDate >= today && taskDate <= nextWeek;
};

export const isThisMonth = (taskDateStr: string): boolean => {
  const today = new Date();
  const taskDate = new Date(taskDateStr);
  return (
    taskDate.getMonth() === today.getMonth() &&
    taskDate.getFullYear() === today.getFullYear()
  );
};