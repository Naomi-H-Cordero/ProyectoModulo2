document.addEventListener('DOMContentLoaded', () => {
  const cookieBanner = document.querySelector('#cookieBanner');
  const cookieAccept = document.querySelector('#cookieAccept');
  const cookieReject = document.querySelector('#cookieReject');

  const COOKIE_KEY = 'cookies_consent_v1';

  function hideCookies() {
    cookieBanner.style.display = 'none';
  }

  function showCookies() {
    cookieBanner.style.display = 'block';
  }

  const saved = localStorage.getItem(COOKIE_KEY);
  if (saved) {
    hideCookies();
  } else {
    showCookies();
  }

  cookieAccept.addEventListener('click', () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    hideCookies();
  });

  cookieReject.addEventListener('click', () => {
    localStorage.setItem(COOKIE_KEY, 'rejected');
    hideCookies();
  });
});