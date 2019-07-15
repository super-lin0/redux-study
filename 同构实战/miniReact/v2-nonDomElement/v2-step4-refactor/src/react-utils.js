const isClazz = func => {
  return (
    typeof func === "function" &&
    /^class\s/.test(Function.prototype.toString.call(func))
  );
};

const isStatelessComponent = func => {
  return !isClazz(func) && typeof func === "function";
};
