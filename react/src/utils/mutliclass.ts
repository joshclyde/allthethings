export default (...classes: string[]) => classes.reduce((acc, val) => `${acc} ${val}`);
