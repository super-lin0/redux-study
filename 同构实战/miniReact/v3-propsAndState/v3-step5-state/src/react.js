(() => {
  let rootDOMElement, rootReactElement;
  const REACT_CLASS = "REACT_CLASS";

  const anElement = (element, props, children) => {
    if (isClazz(element)) {
      return handleClazz(element, props, children);
    }

    if (isStateLessComponent(element)) {
      return element(props);
    }

    return handleHtmlElement(element, props, children);
  };

  const createElement = (element, props, ...children) => {
    return anElement(element, props, children);
  };

  const handleClazz = (clazz, props, children) => {
    const reactElement = new clazz(props);

    reactElement.children = children;
    reactElement.type = REACT_CLASS;

    return reactElement;
  };

  const handleHtmlElement = (element, props, children) => {
    const anElement = document.createElement(element);

    children.forEach(child => appendChild(anElement, child));
    _.forEach(props, (value, name) => appendProps(anElement, name, value));
    return anElement;
  };

  const appendChild = (element, child) => {
    if (child.type === REACT_CLASS) {
      appendChild(element, child.render());
    } else if (Array.isArray(child)) {
      child.forEach(ch => appendChild(element, ch));
    } else if (typeof child === "object") {
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

    setState(state) {
      this.state = Object.assign({}, this.state, state);
      reRender();
    }
  }

  const reRender = () => {
    while (rootDOMElement.hasChildNodes()) {
      rootDOMElement.removeChild(rootDOMElement.lastChild);
    }
    ReactDOM.render(rootReactElement, rootDOMElement);
  };

  window.React = {
    createElement,
    Component
  };
  window.ReactDOM = {
    render: (el, domEl) => {
      rootReactElement = el;
      rootDOMElement = domEl;
      const currentDOM = rootReactElement.render();
      rootDOMElement.appendChild(currentDOM);
    }
  };
})();
