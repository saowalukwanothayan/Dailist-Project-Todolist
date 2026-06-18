const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export function formatDate(val: string): string {
  const [y, m, d] = val.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return `${DAYS[date.getDay()]}-${d}-${MONTHS[date.getMonth()]}-${y}`;
}
export function formatTime(val: string): string {
  if (!val) return "";

  const [hStr, minStr] = val.split(':');
  const h = Number(hStr.padStart(2, '0'));
  const min = Number(minStr ? minStr.padStart(2, '0') : 0);

  const period = h >= 12 ? 'PM' : 'AM';
  const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
  
  return `${h12}:${String(min).padStart(2, '0')} ${period}`;
}

export function parseTimeTo24(val: string): string {
  if (!val) return "";

  if (/^\d{2}:\d{2}$/.test(val)) return val;

  const [time, period] = val.split(" ");
  const [hStr, mStr] = time.split(":");
  let h = Number(hStr);
  const m = Number(mStr);
  if (period === "AM" && h === 12) h = 0;
  if (period === "PM" && h !== 12) h += 12;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export function validateTaskDateTime(
  dateVal: string,
  startTime: string,
  endTime: string
): string | null {
  
  const start24 = parseTimeTo24(startTime);
  const end24 = parseTimeTo24(endTime);

  if (start24 >= end24) {
    return "End Time must be after Start Time!";
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDate = new Date(dateVal);
  selectedDate.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    return "You cannot schedule a task in the past!";
  }

  if (selectedDate.getTime() === today.getTime()) {
    const now = new Date();
    const [startHour, startMin] = start24.split(":").map(Number);
    
    const taskStartTime = new Date();
    taskStartTime.setHours(startHour, startMin, 0, 0);

    if (taskStartTime < now) {
      return "You cannot schedule a task at a past time for today!";
    }
  }
  return null;
}