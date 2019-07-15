(() => {
  const anElement = (element, props, children) => {
    if (isClazz(element)) {
      return handleClazz(element, props);
    }

    if (isStateLessComponent(element)) {
      return element(props);
    }

    return handleHtmlElement(element, props, children);
  };
  const createElement = (element, props, ...children) => {
    return anElement(element, props, children);
  };

  const handleClazz = (clazz, props) => {
    const comp = new clazz(props);
    return comp.render();
  };

  const handleHtmlElement = (element, props, children) => {
    const anElement = document.createElement(element);

    children.forEach(child => appendChild(anElement, child));
    _.forEach(props, (value, name) => appendProps(anElement, name, value));
    return anElement;
  };

  const appendChild = (element, child) => {
    if (typeof child === "object") {
      element.appendChild(child);
    } else {
      element.innerHTML += child;
    }
  };

  const appendProps = (element, propName, propVal) => {
    if (shouldAddEventListener(propName)) {
      element.addEventListener(propName.substring(2).toLowerCase(), propVal);
    } else {
      element.setAttribute(propName, propVal);
    }
  };

  class Component {
    constructor(props) {
      this.props = props;
    }
  }

  window.React = {
    createElement,
    Component
  };
  window.ReactDOM = {
    render: (el, domEl) => {
      domEl.appendChild(el);
    }
  };
})();
