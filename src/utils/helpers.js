/***
 * Filter the lists of temperatures via date
 * @param arr
 * @param key
 * @returns {*}
 */

export const filterListItems = (arr, key) => {
  const initialValue = {};
  return arr?.reduce((acc, cval) => {
    const myAttribute = new Date(cval[key]).getDate();
    acc[myAttribute] = [...(acc[myAttribute] || []), cval];
    return acc;
  }, initialValue);
};

/***
 * Convert date to time in AM or PM
 * @param date
 * @returns {string}
 */

export const timeConverterAMPM = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

/***
 *
 * Convert date to YYYY-MM-DD format
 * @param date
 * @returns {string}
 */
export const formatDate = date => {
  let yyyy = date.getFullYear().toString();
  let mm = (date.getMonth() + 1).toString();
  let dd = date.getDate().toString();
  let mmChars = mm.split('');
  let ddChars = dd.split('');
  return (
    yyyy +
    '-' +
    (mmChars[1] ? mm : '0' + mmChars[0]) +
    '-' +
    (ddChars[1] ? dd : '0' + ddChars[0])
  );
};
