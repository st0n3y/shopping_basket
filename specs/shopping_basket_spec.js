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
      cost: 2
    }

    var item2 = {
      name: "bread", 
      cost: 2
    }

    var item3 = {
      name: "milk", 
      cost: 1
    }

    var item4 = {
      name: "pork", 
      cost: 5
    }

    var item5 = {
      name: "pork", 
      cost: 5
    }

    var item6 = {
      name: "whisky", 
      cost: 30
    }

    basket.insert( item1 )
    basket.insert( item2 )
    basket.insert( item3 )
    basket.insert( item4 )
    basket.insert( item5 )
    basket.insert( item6 )

    assert.equal( 6, basket.items.length )
  } );

  it( "should be able to remove items", function() {
    basket.remove( "bread" )
    assert.equal( 5, basket.items.length )
  } );

} )