import React from 'react';
import TestUtils from 'react-addons-test-utils';

/**
 * Get the shallow rendered component
 *
 * @param  {Object} component The component to return the output for
 * @param  {Object} props [optional] The components properties
 * @param  {Mixed} ...children [optional] List of children
 * @return {Object} Shallow rendered output
 */
export default function createComponent(component, props = {}, ...children) {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(React.createElement(component, props, children.length > 1 ? children : children[0]));
  return shallowRenderer.getRenderOutput();
}