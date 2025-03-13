function isDateString(str: string) {
  const regex =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d{1,})?(([+-])(\d{2}):(\d{2})|Z)?$/;
  return regex.test(str);
}

export function toDDMMYY(str: string) {
  if (isDateString(str)) {
    var date = new Date(str);
    var datestring =
      date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
    return datestring;
  }
  return str;
}
