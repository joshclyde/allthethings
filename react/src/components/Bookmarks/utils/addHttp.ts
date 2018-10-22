export default (url: string): string => (url.startsWith("http") ? url : `http://${url}`);
