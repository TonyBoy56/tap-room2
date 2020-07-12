import * as actions from './../../actions';

describe ('Tap Room actions', () => {
  it ('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({ name: 'Voodoo Ranger IPA', brand: 'New Belgium', price: '239.99', abv: '7.0', quantity: '124', id: 1})).toEqual({
      type: 'ADD_KEG',
      name: 'Voodoo Ranger IPA', 
      brand: 'New Belgium', 
      price: '239.99', 
      abv: '7.0', 
      quantity: '124', 
      id: 1
    })
  });
});