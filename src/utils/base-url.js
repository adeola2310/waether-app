let baseURL;

/**
 *
 * Created this way in case there differnt deployment url
 * eg staging, production or beta
 */

if (window.location.href.includes('localhost')) {
  baseURL = 'https://api.openweathermap.org/data/2.5';
}

if (window.location.href.includes('netlify')) {
  baseURL = 'https://api.openweathermap.org/data/2.5';
}

export { baseURL };
