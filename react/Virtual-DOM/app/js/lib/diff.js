import * as util from './util';
import patch from './patch';
import listDiff from 'list-diff2';

export default function diff(oldTree, newTree) {
  let index = 0;
  let patches = {};
  diffWalk(oldTree, newTree, index, patches);

  return patches;
}

/**
 * @details [short deffrence and return new tree]
 */
function diffWalk(oldNode, newNode, index, patches) {
  let currentPatch = [];

  // node is removed
  if (newNode === null) {
    // remove item when new node null
  } else if (util.isString(oldNode) && util.isString(newNode)) {

    if (newNode !== oldNode) {
      currentPatch.push({ type: patch.TEXT, content: newNode });
    }

  // check value tag name and style
  } else if ( oldNode.tagName === newNode.tagName && oldNode.key === newNode.key ) {
    // diff props
    let propsPatches = diffProps(oldNode, newNode);
    if (propsPatches) {
      currentPatch.push({ type: patch.PROPS, props: propsPatches });
    }
    // diff children
    diffChildren(oldNode.children, newNode.children, index, patches, currentPatch);

  // we are not the same
  } else {
    currentPatch.push({ type: patch.REPLACE, node: newNode });
  }

  if (currentPatch.length) {
    patches[index] = currentPatch;
  }
}

/**
 * @details [difference between content old and new]
 */
function diffChildren(oldChildren, newChildren, index, patches, currentPatch) {
  let diffs = listDiff(oldChildren, newChildren, 'key');
  newChildren = diffs.children;

  if (diffs.moves.length) {
    let reorderPatch = { type: patch.REORDER, moves: diffs.moves };
    currentPatch.push(reorderPatch);
  }

  let leftNode = null;
  let currentNodeIndex = index;
  util.each(oldChildren, (child, i) => {
    let newChild = newChildren[i];
    currentNodeIndex = (leftNode && leftNode.count) ? currentNodeIndex + leftNode.count + 1 : currentNodeIndex + 1;
    diffWalk(child, newChild, currentNodeIndex, patches);
    leftNode = child;
  })
}

/**
 * @details [difference between style old and new]
 */
function diffProps(oldNode, newNode) {
  let count = 0;
  let oldProps = oldNode.props;
  let newProps = newNode.props;

  let key, value;
  let propsPatches = {};

  // find out different properties
  for (key in oldProps) {
    value = oldProps[key]
    if (newProps[key] !== value) {
      count++;
      propsPatches[key] = newProps[key];
    }
  }

  // find out new property
  for (key in newProps) {
    value = newProps[key];
    if (!oldProps.hasOwnProperty(key)) {
      count++;
      propsPatches[key] = newProps[key];
    }
  }

  // if properties all are identical
  if (count === 0) {
    return null;
  }
  return propsPatches;
}
