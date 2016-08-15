export const pad = (value, length) => {
  while (value.length < length)
    value = "0" + value;
  return value;
}

export const clone = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
}

export const toStringDay = (date) => {
  return date.getFullYear() + "-" + pad((date.getMonth()+1).toString(), 2) + "-" + pad(date.getDate().toString(), 2);
}

export const toDayOfMonthString = (date) => {
  return pad(date.getDate().toString());
}

export const toMonthAndYearString = (date) => {
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return months[date.getMonth()] + " " + date.getFullYear();
}

export const moveToDayOfWeek = (date, dayOfWeek) => {
  while (date.getDay() !== dayOfWeek)
    date.setDate(date.getDate()-1);
  return date;
}

export const isSameDay = (first, second) => {
  return first.year === second.getFullYear() &&  first.monthCurrent === second.getMonth() && first.dayCurrent === second.getDate()
}

export const isSameDays = (first, second) => {
  return first.getFullYear() === second.getFullYear() &&  first.getMonth() === second.getMonth() && first.getDate() === second.getDate()
}

export const setDateToString = (day) => {
  let getDay = ((day.monthCurrent -1) +'/'+ day.dayCurrent  +'/'+day.year);
  return new Date(getDay);
}

export const setMonthToString = (day) => {
  let secondDay = new Date(day);
  return new Date((secondDay.getMonth() - 1) +'/'+ secondDay.getDate() +'/'+ secondDay.getFullYear()); 
}

export const isBefore = (first, second) => {
  return setDateToString(first).getTime() < setMonthToString(second).getTime();
}

export const isAfter = (first, second) => {
  return setDateToString(first).getTime() > setMonthToString(second).getTime();
}