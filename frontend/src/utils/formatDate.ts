export function getDateParts(date: Date) {
  return {
    weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
    day: date.toLocaleDateString("en-US", { day: "numeric" }),
    month: date.toLocaleDateString("en-US", { month: "long" }),
    year: date.toLocaleDateString("en-US", { year: "numeric" }),
  }
}

export function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })
}