import './styles/styles.scss';

import svd from'./js/virtual-dom';

export class App {
  constructor(count) {

  }
  
  renderTree () {
    this.count++;

    let items = [];
    let color = (this.count % 2 === 0)
      ? 'blue'
      : 'red';
    for (let i = 0; i < this.count; i++) {
      items.push(Element('li', ['Item #' + i]))
    }

    let el = svd.el;
    console.log(el);
    let diff = svd.diff;
    let patch = svd.patch;
    let tree: any;

    return tree = el('div', {'id': 'container'}, [
      el('h1', {style: 'color: blue'}, ['virtual-dom']),
      el('p', ['Name, virtual-dom']),
      el('ul', [el('li')])
    ])
  }

  buildRender() {
    let tree = this.renderTree();
    let root = tree.render()
    document.body.appendChild(root)

    setInterval(function () {
      let newTree = this.renderTree()
      let patches = diff(tree, newTree)
      console.log(patches)
      patch(root, patches)
      tree = newTree
    }, 1000);
  }
}

let inst = new App();
inst.buildRender();