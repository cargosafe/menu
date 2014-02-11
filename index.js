
/**
 * Module dependencies.
 */

var createView = require('view');
var slug = require('slug');
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
  var attrs = {
    url: url,
    text: text,
    slug: slug(text)
  };
  var link = new Link(attrs);
  this.el.appendChild(link.el);
  return this;
};

