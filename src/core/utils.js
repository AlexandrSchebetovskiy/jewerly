export function getMethod(string) {
  return 'on' + capitalize(string)
}
function capitalize(string = 'string') {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

