import { addMinutes, format } from "date-fns";
import { ru } from "date-fns/locale";

export const convertEstimate = (hours: number): string => {
  const wholeHours = Math.floor(hours);
  const minutes = Math.round((hours - wholeHours) * 60);

  const date = new Date(0);
  date.setUTCHours(wholeHours, minutes);

  const formattedDate = format(
    addMinutes(date, date.getTimezoneOffset()),
    "HH:mm",
    { locale: ru }
  );
  return formattedDate;
};
