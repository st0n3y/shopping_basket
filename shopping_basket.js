var _ = require('lodash');

var shoppingBasket = {

  cost: 0,

  items: [],

  insert: function( i ) {
    this.items.unshift( i )
  }

}

module.exports = shoppingBasket;