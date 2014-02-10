
/**
 * Module dependencies.
 */

var createView = require('view');
var Link = createView(require('./link.html'));
var Menu = createView(require('./menu.html'));

/**
 * Expose `Menu`.
 */

module.exports = Menu;

/**
 * Add menu-item.
 */

Menu.prototype.add = function(text, url){
  var link = new Link({url: url, text: text});
  this.el.appendChild(link.el);
  return this;
};

