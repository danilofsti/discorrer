
export const padTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
}
  
export const formatDate = (date) => {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

export const formatTimeFromDate = (date) => {
  return new Date(date).toISOString().substr(11, 5)
}

export const formatTimeFromSeconds = (seconds) => {
  return new Date(seconds * 1000).toISOString().substr(11, 8);
}

export const getSeconds = (time) => {
  const [hour, min, second] = time.split(':');
  return (parseInt(hour)*60*60)+(parseInt(min)*60)+parseInt(second);
}

export const formatDateFromString = (string) => {
  const [dateValues, timeValues] = string.split(' ');
  const [newDay, month, year] = dateValues.split('/');
  const [hours, minutes] = timeValues.split(':');
  return new Date(+year, +month - 1, +newDay, +hours, +minutes, 0);
}

export const getMeters = (quilometers) => {
  return quilometers*1000;
}

export const getQuilometers = (meters) => {
  return meters/1000;
}
  
export const formatPace = (seconds, distance) => {
  if(Object.is(NaN, seconds))
  {
    return ''
  }
  const totalMinutes = seconds / 60;
  const meter = distance/1000; 
  const pace = totalMinutes / meter,
  paceMinutes = Math.floor(pace),
  paceSeconds = Math.round((pace - paceMinutes) * 60);
  return `${padTo2Digits(paceMinutes)}'${padTo2Digits(paceSeconds)}"`
}

export const formatTagsToList = (run) => {
  return [run.type , run.where, ...run.pre, ...run.during, ...run.post]
}