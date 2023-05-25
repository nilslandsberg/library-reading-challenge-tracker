export const toHoursAndMinutes = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (minutes > 0) {
    return hours + " hours and " +  minutes + " minutes";
  } else {
    return hours + " hours";
  }
}