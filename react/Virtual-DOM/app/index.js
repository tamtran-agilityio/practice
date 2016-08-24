import './styles/styles.scss';
import { Element, diff, patch } from './js/virtual-dom';

export class App {
  constructor(count, tagName, props, children) {
  }
  
  renderTree () {
    this.count = 0;
    let el = (tagName, props, children) => {
      return new Element(tagName, props, children);
    }
    
    this.count++;
    let items = [];
    for (let i = 0; i < this.count; i++) {
      items.push(el('li', ['item ' + i]))
    }
    return el('div', {'id': 'container'}, [
      el('h1', {style: 'color: #000'}, ['Virtual DOM']),
      el('p', ['the count is :' + this.count]),
      el('ul', items)
    ])
  }

  newsTree(count) {
    let el = (tagName, props, children) => {
      return new Element(tagName, props, children);
    }
    this.count++;
    let items = [];
    for (let i = 0; i < this.count; i++) {
      items.push(el('li', ['item ' + i]));
    }

    return el('div', {'id': 'container'}, [
      el('h1', {style: 'color: #000'}, ['Virtual DOM']),
      el('p', ['the count is :' + this.count]),
      el('ul', items)
    ])
  }

  buildRender() {
    let tree = this.renderTree();
    let root = tree.render();
    document.body.appendChild(root);
    let newTree = this.newsTree(this.count);
    let patches = diff(tree, newTree);
    console.log("SSSSS", patches);
    patch(root, patches);
    tree = newTree;
  }

}

let inst = new App();
inst.buildRender();