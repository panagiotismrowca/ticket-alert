function getNumbersOnly(string) {
  return string.replace(/\D/g, '');
}
function getNumbersOnlyInt(string) {
  return parseInt(string.replace(/\D/g, ''));
}

export { getNumbersOnly, getNumbersOnlyInt };
