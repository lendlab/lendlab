import moment from "moment/min/moment-with-locales";
import "moment/locale/es";
moment.locale("es");

export const momentizeDate = (unformattedDate) => {
  const sqlDate = parseInt(unformattedDate);

  const completeFormattedDate = moment(sqlDate).format("D [de] MMMM [del] YYYY [a las] H:mm");

  const slashedFormattedDate = moment(parseInt(unformattedDate)).format("D[/]M[/]YY");

  const toNow = moment(new Date()).to(sqlDate);

  const fromNow = moment(sqlDate).fromNow();

  return {
    sqlDate,
    completeFormattedDate,
    fromNow,
    toNow,
    slashedFormattedDate,
  };
};
