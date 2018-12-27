function addProduct() {
  const $product = $('input[type=text]');
  const $price = $('input[type=number]');
  const $totalPrice = $('tfoot > tr > td:nth-child(2)');
  const $productList = $('#product-list');
  
  const product = $product.val();
  const price = $price.val();
  
  if (product && price) {
    const totalSum = +price + +$totalPrice.text();
    $totalPrice.text(totalSum);
    
    $productList.append(`
      <tr>
        <td>${product}</td>
        <td>${price}</td>
      </tr>`);
    
    $product.val('');
    $price.val('');
  }
}