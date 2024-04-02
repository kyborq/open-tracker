import { addMinutes, format, isValid } from "date-fns";
import { ru } from "date-fns/locale";

export const convertEstimate = (hours: number): string => {
  const wholeHours = Math.floor(hours);
  const minutes = Math.round((hours - wholeHours) * 60);

  const date = new Date(0);
  date.setUTCHours(wholeHours, minutes);

  if (!isValid(date)) {
    return "00:00";
  }

  const formattedDate = format(
    addMinutes(date, date.getTimezoneOffset()),
    "HH:mm",
    { locale: ru }
  );
  return formattedDate;
};
