const isClazz = func =>
  typeof func === "function" &&
  /^class\s/.test(Function.prototype.toString.call(func));

const isStateLessComponent = func =>
  !isClazz(func) && typeof func === "function";

const shouldAddEventListener = property => /^on.*$/.test(property);
