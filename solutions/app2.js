const setCookie = (cookieName, cookieValue) => {
  const expires = new Date(Date.now() + 15 * 60 * 1000);
  document.cookie = `${cookieName}= ${cookieValue}; expires= ${expires.toUTCString()}; path=/`;
};
setCookie('viewed', '5');
setCookie('uid', '354774631237');
setCookie('ssid', 'Bx55OWbHJ0Vt_IGIF');

const cookieHandler = {
  getAll() {
    const cookies = document.cookie.split('; ');
    const cookiesObj = cookies.reduce((pv, cv) => {
      const [name, value] = cv.split('=');
      return { ...pv, [name]: value };
    }, {});
    return cookiesObj;
  },
  toSessionStorage() {
    const cookiesObj = Object.entries(this.getAll());
    cookiesObj.forEach((cookie) => {
      sessionStorage.setItem(cookie[0], cookie[1]);
    });
  },
  flush() {
    const cookieNames = Object.keys(this.getAll());
    cookieNames.forEach((cookieName) => {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
  },
};
// export { cookieHandler };
export { cookieHandler };
