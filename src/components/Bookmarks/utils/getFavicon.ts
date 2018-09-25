export default (url: string): string => {
  // const dataURL = new URL(data);
  // return `https://www.google.com/s2/favicons?domain_url=${dataURL.hostname}`;
  return url.replace(/(.*?[^\/])(\/[^\/].*)/, "$1/favicon.ico");
};
