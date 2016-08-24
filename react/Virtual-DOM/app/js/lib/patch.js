import * as util from './util'

const [
  REPLACE,
  REORDER,
  PROPS,
  TEXT
] = [0, 1, 2, 3]

export default function patch(node, patches) {
  let walker = {index: 0}
  diffWalk(node, walker, patches)
}

patch.REPLACE = REPLACE
patch.REORDER = REORDER
patch.PROPS = PROPS
patch.TEXT = TEXT

function diffWalk(node, walker, patches) {
  let currentPatches = patches[walker.index]

  let len = node.childNodes
    ? node.childNodes.length
    : 0
  for (let i = 0; i < len; i++) {
    let child = node.childNodes[i]
    walker.index++
    diffWalk(child, walker, patches)
  }

  if (currentPatches) {
    applyPatches(node, currentPatches)
  }
}

function applyPatches(node, currentPatches) {
  util.each(currentPatches, (currentPatch) => {
    switch (currentPatch.type) {
      case REPLACE:
        node.parentNode.replaceChild(currentPatch.node.render(), node);
        break
      case REORDER:
        reorderChildren(node, currentPatch.moves);
        break
      case PROPS:
        setProps(node, currentPatch.props);
        break
      case TEXT:
        if (node.textContent) {
          node.textContent = currentPatch.content;
        } else {
          // fuck ie
          node.nodeValue = currentPatch.content;
        }
        break
      default:
        throw new Error(`Unknown patch type ${currentPatch.type}`);
    }
  })
}

function setProps(node, props) {
  for (let key in props) {
    if (props[key] === void 0) {
      node.removeAttribute(key);
    } else {
      let value = props[key];
      util.setAttr(node, key, value);
    }
  }
}

function reorderChildren(node, moves) {
  let staticNodeList = util.toArray(node.childNodes);
  let maps = {};

  util.each(staticNodeList, (node) => {
    if (node.nodeType === 1) {
      let key = node.getAttribute('key');
      if (key) {
        maps[key] = node;
      }
    }
  })

  util.each(moves, (move) => {
    let index = move.index;
    if (move.type === 0) { // remove item
      if (staticNodeList[index] === node.childNodes[index]) { // maybe have been removed for inserting
        node.removeChild(node.childNodes[index]);
      }
      staticNodeList.splice(index, 1)
    } else if (move.type === 1) { // insert item
      let insertNode = maps[move.item.key] ? maps[move.item.key] : (typeof move.item === 'object') ? move.item.render() : document.createTextNode(move.item)
      staticNodeList.splice(index, 0, insertNode);
      node.insertBefore(insertNode, node.childNodes[index] || null);
    }
  })
}
