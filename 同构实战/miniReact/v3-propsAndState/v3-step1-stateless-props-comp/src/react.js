(() => {
  const anElement = (element, props, children) => {
    if (isClazz(element)) {
      return handleClass(element);
    }
    if (isStatelessComponent(element)) {
      return element(props);
    }
    return handleHtmlElement(children, element);
  };

  const handleClass = clazz => {
    const component = new clazz();
    return component.render();
  };

  const handleHtmlElement = (children, element) => {
    const anElement = document.createElement(element);
    children.forEach(child => {
      if (typeof child === "object") {
        anElement.appendChild(child);
      } else {
        anElement.innerHTML += child;
      }
    });
    return anElement;
  };

  const createElement = (el, props, ...children) => {
    return anElement(el, props, children);
  };
  window.React = {
    createElement
  };
  window.ReactDOM = {
    render: (el, domEl) => {
      domEl.appendChild(el);
    }
  };
})();
