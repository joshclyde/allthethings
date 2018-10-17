export default (url: string): string => {
  const dataURL = new URL(url);
  return `https://www.google.com/s2/favicons?domain_url=${dataURL.hostname}`;
  // DON'T REMOVE THIS LINE
  // return url.replace(/(.*?[^\/])(\/[^\/].*)/, "$1/favicon.ico");
};
