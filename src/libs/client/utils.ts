export function cls(...classnames: (string | undefined)[]) {
  return classnames.filter(name => name != undefined || name != '').join(' ');
}

export const setCurrentTime = () => {
  const TIME_ZONE = 1000 * 60 * 60 * 9;
  const resultTime = new Date(new Date().getTime() + TIME_ZONE)
    .toISOString()
    .replace('T', ' ')
    .slice(0, -5);
  return String(resultTime);
};
