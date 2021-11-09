import moment from "moment/min/moment-with-locales";
import "moment/locale/es";
moment.locale("es");

export const momentizeDate = (unformattedDate) => {
  const sqlDate = unformattedDate;

  const completeFormattedDate = moment(sqlDate, "YYYY-MM-DD HH:mm:ss").format(
    "D [de] MMMM [del] YYYY [a las] H:mm"
  );

  const slashedFormattedDate = moment(unformattedDate, "YYYY-MM-DD HH:mm:ss").format("D[/]M[/]YY");

  const toNow = moment(new Date(), "YYYY-MM-DD HH:mm:ss").to(sqlDate);

  const fromNow = moment(sqlDate, "YYYY-MM-DD HH:mm:ss").fromNow();

  return {
    sqlDate,
    completeFormattedDate,
    fromNow,
    toNow,
    slashedFormattedDate,
  };
};
