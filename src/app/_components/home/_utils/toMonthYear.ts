export const toMonthYear = (date: Date | string) => {
  if (typeof date === 'string') {
    return date.toUpperCase(); // Could be `'current'`
  }
  return `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
};
