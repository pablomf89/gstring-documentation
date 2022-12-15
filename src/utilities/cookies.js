export const setCookie = (cookiename, cookieValue, expDay) => {
  let d = new Date();
  if(expDay) {
    d.setTime(d.getTime() + expDay * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cookiename + "=" + cookieValue + ";" + expires + ";path=/";
  } else{
     document.cookie = cookiename + "=" + cookieValue + ";path=/";
  }
};

export const getCookie = cookieName => {
  let name = cookieName + "=";
  let ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const deleteCookie = cookieName => {
  setCookie(cookieName, "", -1);
};
