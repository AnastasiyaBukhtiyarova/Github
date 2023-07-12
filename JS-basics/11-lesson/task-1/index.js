const product = {
  id: 1001,
  name: 'oil',
  isAvailable:  true,
  price: 20000,
  color: 'Green',
  storeAddress: null,
};

const productName = product.name;
//const productName = product['name'];
console.log(productName);
const storeAddress = product.storeAddress;
//const storeAddress = product['storeAddress'];
console.log(storeAddress);
product.deliveryOptions = ['Новая почта', 'Укр почта', 'Самовывоз'];
//product['deliveryOptions'] = ['Новая почта', 'Укр почта', 'Самовывоз'];
console.log(product);
