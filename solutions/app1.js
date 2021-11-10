const setCookie = (cookieValue) => {
  const expires = new Date(Date.now() + 15 * 60 * 1000);
  document.cookie = `token= ${cookieValue}; expires= ${expires.toUTCString()}; path=/`;
};

// export default setCookie;
export default setCookie;
