import './styles/styles.scss';
import { Element, diff, patch } from './js/virtual-dom';

export class App {
  constructor(count, tagName, props, children) {
    this.count = 0;
  }
  
  renderTree () {
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
    let formText = 
    `<span> 
      <label> Input text:</label>
      <input id='inputText' type="text" value='0' ref='text'>
      <button id="btnsave" type="submit"> Submit </button>
    </span>`;
    document.getElementById('app').innerHTML += formText;
    let button = document.querySelector("button");
    button.addEventListener("click", function() {
      this.count = document.getElementById('inputText').value;
      console.log("this.count", this.count);
    });

    // document.getElementById("btnsave").addEventListener("click", function() {
    //   console.log(this.count);
    // }); 
    document.body.appendChild(root);
    console.log("this.count", this.count);
    let newTree = this.newsTree(this.count);
    let patches = diff(tree, newTree);
    console.log("SSSSS", patches);
    patch(root, patches);
    tree = newTree;
  }

}

let inst = new App();
inst.buildRender();