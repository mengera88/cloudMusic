export const paserCookie = (cookie) => {
  const cookieObj = {};
  const cookieArray = cookie.split('; ');
  cookieArray.forEach((item) => {
    const ckey = item.split('=')[0];
    const cvalue = item.split('=')[1];
    cookieObj[ckey] = cvalue;
  });
  return cookieObj;
}
;
