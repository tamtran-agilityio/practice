import * as until from './util' ;

class Element {
  constructor(tagName, props, children) {
    this.createElementItem(tagName, props, children);
  }

  /**
   * @details [create elememt item]
   * 
   * @param tagName [tag used]
   * @param props [style]
   * @param children [string]
   */
  createElementItem(tagName, props, children) {
    if (!(this instanceof Element)) {
      if (!until.isArray(this.children) && this.children !== null) {
        this.children = until.slice(arguments, 2).filter(until.truthy)
      }
      return new Element(this.tagName, this.props, this.children)
    }

    if (until.isArray(props)) {
      children = props;
      props = {};
    }

    this.tagName = tagName;
    this.props = props || {};
    this.children = children || [];
    this.key = props ? props.key : void 666;

    let count = 0;

    until.each(this.children, (child, i) => {
      if (child instanceof Element) {
        count += child.count;
      } else {
        children[i] = `${child}`;
      }
      count++;
    })

    this.count = count;
  }

  /**
   * @details [render to hmtl]
   */
  render() {
    const element = document.createElement(this.tagName);
    const props = this.props;

    for (const propName in props) {
      const propValue = props[propName];
      until.setAttr(element, propName, propValue)
    }

    until.each(this.children, child => {
      const childEl = (child instanceof Element) ? child.render() : document.createTextNode(child);
      element.appendChild(childEl);
    })

    return element
  }
}

export default Element;