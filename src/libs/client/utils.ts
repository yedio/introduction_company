export function cls(...classnames: (string | undefined)[]) {
  return classnames.filter(name => name != undefined || name != '').join(' ');
}
