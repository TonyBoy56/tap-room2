export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addKeg = (keg) => {
  const { name, brand, price, abv, quantity, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    quantity: quantity,
    id: id
  }
}