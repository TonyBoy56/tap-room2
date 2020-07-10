import kegListReducer from '../../reducers/keg-list-reducer';

describe ('kegListReducer', () => {

  let action;
  const kegData = {
    name: 'Voodoo Ranger IPA',
    brand: 'New Belgium',
    price: '239.99',
    abv: '7.0',
    quantity: '124',
    id: 1
  };

  test('Should return default state if there is no action type passed to the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, abv, quantity, id } = kegData;
    action = {
      name: name,
      brand: brand, 
      price: price,
      abv: abv,
      quantity: quantity,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand, 
        price: price,
        abv: abv,
        quantity: quantity,
        id: id
      }
    })
  });
});