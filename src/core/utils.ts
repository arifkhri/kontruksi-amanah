let debounceTimeout: string | number | NodeJS.Timeout | undefined;

export const ucfirst = (str: string) => {
  const char = str;

  return `${(char.charAt(0) || '').toUpperCase()}${char.slice(1)}`;
};

export const startCase = (str: string) => {
  return str.replace(/(\b\w)/gi, word => word.toUpperCase());
};

export const omit = (obj: any, keys: string | string[]) => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([k]) => !keys.includes(k))
  );
};

export const hasOwnProperty = (object = {}, key: string) => {
  return Object.prototype.hasOwnProperty.call(object, key);
};

export const scrollTo = (id: string) => {
  window.location.hash = id;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView();
  }
};

export const isEmpty = (obj: any) => (
  [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length
);

export const debounce = (func: () => void, timeout: number | undefined, options?: any) => {
  const { leading = false, trailing = true } = options || {} as any;
  if (debounceTimeout) {
    if (!leading && !trailing) {
      func();
    }

    if (!trailing) {
      return;
    }

    clearTimeout(debounceTimeout);
    debounceTimeout = undefined;
  }

  if (leading && !debounceTimeout) {
    func();
  }

  debounceTimeout = setTimeout(trailing ? func : () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = undefined;
  }, timeout);
};

export const validateEmail = (email: string) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export const validateUrl = (email: string) => {
  if (/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(email)) {
    return true;
  }
  return false;
};

export const trackEvent = (name: string, attributes = { label: '' }) => {
  if (process.env.NODE_ENV === 'production') {
    gtag('event', name, {
      ...attributes,
      label: attributes.label,
    });
    mixpanel.track(name, {
      ...attributes
    });
  }
};


// export const get = (object: any, path: string): Object => {
//   const _path = Array.isArray(path) ? path : path.split('.') as any;
//   if (object && _path.length) return get(object[_path.shift()], _path);
//   return object;
// };
