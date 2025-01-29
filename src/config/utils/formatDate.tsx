export const formatDate = (dateString:string, time?:string) => {
  // next dev
  const currentTime = new Date().getSeconds()
  
  const [day, month, year] = dateString.split('/').map(Number);
  const date = new Date(year, month - 1, day);

  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
};