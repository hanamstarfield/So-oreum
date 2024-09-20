export const getToday = () => {
  let today = new Date();

  let year = today.getFullYear() + ""; // 년도
  let month = (today.getMonth() + 1) + "";  // 월
  let date = today.getDate() + "";  // 날짜

  month = month.length === 1 ? '0' + month : month;
  date = date.length === 1 ? '0' + date : date;
  // let day = today.getDay();  // 요일

  return year + '-' + month + '-' + date;
}


export const getUrlMasking = (url) => {
  if (url) {
    const urlPattern = /^(https?:\/\/)?([^\/]+)(\/.*)?$/;
    const match = url.match(urlPattern);

    if (match) {
      const protocol = match[1] || "";
      const domain = match[2];
      const path = match[3] || "";

      const maskedDomain = domain;

      const maskedPath = path.length > 0 ? path.replace(/[^\/]+$/, "***") : "";

      return `${protocol}${maskedDomain}${maskedPath}`;
    }

    return url;
  }
  return "";
};