var basket = require( '../shopping_basket.js' );
var assert = require( 'chai' ).assert

describe( 'Shopping Basket', function() {

  it( "should start at 0 cost", function() {
    assert.equal( 0, basket.cost )
  } );

  it( "should start empty", function() {
    assert.equal( 0, basket.items.length )
  } );

  it( "should be able to add an item", function() {
    var item1 = {
      name: "bread", 
      cost: 2, 
      quantity: 2
    }

    var item2 = {
      name: "milk", 
      cost: 1, 
      quantity: 1
    }
    var item3 = {
      name: "pork", 
      cost: 5,
      quantity: 3
    }

    basket.insert( item1 )
    basket.insert( item2 )
    basket.insert( item3 )

    assert.equal( 3, basket.items.length )
  } );

  it( "should be able to remove items", function() {
    basket.
  } );

} )