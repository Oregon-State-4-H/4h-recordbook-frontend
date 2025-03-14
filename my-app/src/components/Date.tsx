import dayjs from "dayjs";

export function isDateString(str: string) {
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

export function toDateType(str: string) {
  return new Date(str);
}

export function toDayJSType(str: string) {
  // if (isDateString(str)) {
  //   var date = new Date(str);
  //   console.log("datestr: ", str);
  //   console.log("date ", date);
  //   return dayjs().set("day", date.getDay()).set("month", date.getFullYear());
  // }
  // return dayjs();
  return dayjs(str);
}

function isDayJs(dateDayJs: dayjs.Dayjs | null): dateDayJs is dayjs.Dayjs {
  return typeof (dateDayJs as dayjs.Dayjs) != null;
}

export function DayJSTypetoRFC3339(dateDayJs: dayjs.Dayjs | null) {
  if (isDayJs(dateDayJs)) {
    return dateDayJs.toISOString();
  }
  return "";
}
