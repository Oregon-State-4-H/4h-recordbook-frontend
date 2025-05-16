import dayjs from "dayjs";

export function isDateString(str: string) {
  const regex =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d{1,})?(([+-])(\d{2}):(\d{2})|Z)?$/;
  return regex.test(str);
}

export function toDDMMYY(str: string) {
  if (isDateString(str)) {
    var date = dayjs(str);
    var datestring = date.format("MM/DD/YYYY");
    return datestring;
  }
  return str;
}

export function toDateType(str: string) {
  return new Date(str);
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
