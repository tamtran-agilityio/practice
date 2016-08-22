import * as until from './util' ;

function Element (tagName, props, children) {
  if (!(this instanceof Element)) {
    if (!until.isArray(children) && children != null) {
      children = until.slice(arguments, 2).filter(until.truthy)
    }
    return new Element(tagName, props, children)
  }

  if (until.isArray(props)) {
    children = props
    props = {}
  }

  this.tagName = tagName
  this.props = props || {}
  this.children = children || []
  this.key = props
    ? props.key
    : void 666

  let count = 0

  until.each(this.children, function (child, i) {
    if (child instanceof Element) {
      count += child.count
    } else {
      children[i] = '' + child
    }
    count++
  })

  this.count = count;
}

/**
 * Render the hold element tree.
 */
Element.prototype.render = function () {
  let el = document.createElement(this.tagName)
  let props = this.props

  for (let propName in props) {
    let propValue = props[propName]
    until.setAttr(el, propName, propValue)
  }

  until.each(this.children, function (child) {
    let childEl = (child instanceof Element)
      ? child.render()
      : document.createTextNode(child)
    el.appendChild(childEl)
  })

  return el
}

module.exports = Element

// class Element {
//   constructor(tagName, props, children) {
//     if (!(this instanceof Element)) {
//       if (!until.isArray(children) && children != null) {
//         children = until.slice(arguments, 2).filter(until.truthy)
//       }
//       return new Element(tagName, props, children)
//     }

//     if (until.isArray(props)) {
//       children = props
//       props = {}
//     }

//     this.tagName = tagName
//     this.props = props || {}
//     this.children = children || []
//     this.key = props
//       ? props.key
//       : void 666

//     let count = 0;

//     until.each(this.children, (child, i) => {
//       if (child instanceof Element) {
//         count += child.count
//       } else {
//         children[i] = `${child}`
//       }
//       count++
//     })

//     this.count = count
//   }

//   static render() {
//     const el = document.createElement(this.tagName);
//     const props = this.props;

//     for (const propName in props) {
//       const propValue = props[propName];
//       until.setAttr(el, propName, propValue)
//     }

//     until.each(this.children, child => {
//       const childEl = (child instanceof Element)
//         ? child.render()
//         : document.createTextNode(child);
//       el.appendChild(childEl)
//     })

//     return el
//   }
// }

// export default Element;