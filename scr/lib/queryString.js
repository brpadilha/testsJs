const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please check your params');
  }

  return `${key}=${value}`;
};

export function queryString(obj) {
  return Object.entries(obj).map(keyValueToString).join('&');
}

export function parse(queryString) {
  return Object.fromEntries(
    queryString.split('&').map((item) => {
      let [key, value] = item.split('=');

      if (value.includes(',')) {
        value = value.split(',');
      }
      return [key, value];
    }),
  );
}
