export const type = (obj)  => {
  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '')
}

export const isArray = (list) => {
  return type(list) === 'Array'
}

export const isString = (list) => {
  return type(list) === 'String'
}

export const each = (array, fn)  =>  {
  for (var i = 0, len = array.length; i < len; i++) {
    fn(array[i], i)
  }
}

export const toArray = (listLike)  =>  {
  if (!listLike) {
    return []
  }

  var list = []

  for (var i = 0, len = listLike.length; i < len; i++) {
    list.push(listLike[i])
  }

  return list
}

export const setAttr = (node, key, value)  =>  {
  switch (key) {
    case 'style':
      node.style.cssText = value
      break
    case 'value':
      var tagName = node.tagName || ''
      tagName = tagName.toLowerCase()
      if (
        tagName === 'input' || tagName === 'textarea'
      ) {
        node.value = value
      } else {
        // if it is not a input or textarea, use `setAttribute` to set
        node.setAttribute(key, value)
      }
      break
    default:
      node.setAttribute(key, value)
      break
  }
}