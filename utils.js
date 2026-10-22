export function isString(data) {
  return typeof data === 'string';
}
export function isNumber(data) {
  return typeof data === 'number';
}
export function isNotEmpty(data) {
  return (
    data !== undefined ||
    data !== null ||
    JSON.stringify(data) !== '{}' ||
    data !== ''
  );
}
export function isEmpty(data) {
  return (
    data === undefined ||
    data === null ||
    JSON.stringify(data) === '{}' ||
    data === ''
  );
}

export function isNotArray(data) {
  return Array.values(data) && data.length !== 0;
}

export function isCorrectStatus(enums, status) {
  return Object.values(enums).includes(status);
}

Object.values({ name: 'alex' });

isCorrectStatus({ name: 'alex' }, 'alex');
