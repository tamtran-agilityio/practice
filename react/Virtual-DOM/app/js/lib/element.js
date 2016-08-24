import * as util from './util' ;

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
      if (!util.isArray(this.children) && this.children !== null) {
        this.children = util.slice(arguments, 2).filter(util.truthy);
      }
      return new Element(this.tagName, this.props, this.children);
    }

    if (util.isArray(props)) {
      children = props;
      props = {};
    }

    this.tagName = tagName;
    this.props = props || {};
    this.children = children || [];
    this.key = props ? props.key : void 666;

    let count = 0;

    util.each(this.children, (child, i) => {
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
      util.setAttr(element, propName, propValue)
    }

    util.each(this.children, child => {
      const childEl = (child instanceof Element) ? child.render() : document.createTextNode(child);
      element.appendChild(childEl);
    })

    return element;
  }
}

export default Element;