var html = '<div class="foo bar" style="color: red; background: yellow;" data-yo="123">yo</div>';

var virtual = require('virtual-html')

// synchronous interface
var dom = virtual(html)

dom.tagName

dom.children[0].text

dom.properties.dataset.yo