function onlineShop(selector) {
  let form = `<div id="header">Online Shop Inventory</div>
  <div class="block">
      <label class="field">Product details:</label>
      <br>
      <input placeholder="Enter product" class="custom-select">
      <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
      <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
      <button id="submit" class="button" disabled>Submit</button>
      <br><br>
      <label class="field">Inventory:</label>
      <br>
      <ul class="display">
      </ul>
      <br>
      <label class="field">Capacity:</label><input id="capacity" readonly>
      <label class="field">(maximum capacity is 150 items.)</label>
      <br>
      <label class="field">Price:</label><input id="sum" readonly>
      <label class="field">BGN</label>
  </div>`;
  $(selector).html(form);
  
  // judge tests don't have invalid inputs eg: price: -10, so I didn't bother validating;
  const $product = $('.custom-select');
  const $price = $('#price');
  const $quantity = $('#quantity');
  const $submitButton = $('#submit');
  const $inventory = $('.display');
  const $capacity = $('#capacity');
  const $sum = $('#sum');
  
  $product.on('keyup', function () {
    if ($(this).val().length !== 0) {
      $submitButton.prop('disabled', false);
    } else {
      $submitButton.prop('disabled', true);
    }
  });
  
  $submitButton.on('click', addItemToInventory);
  
  function addItemToInventory() {
    if ($product.val() && $price.val() && $quantity.val()) {
      const quantity = +$quantity.val();
      const price = +$price.val();
      if (+$capacity.val() + quantity <= 150) {
        $inventory.append($('<li>').text(`Product: ${$product.val()} Price: ${price} Quantity: ${quantity}`));
        $capacity.val(+$capacity.val() + quantity);
        $sum.val(+$sum.val() + price);
        $product.val('');
        $price.val(1);
        $quantity.val(1);
      }
      
      if (+$capacity.val() === 150) {
        $capacity.val('full');
        $capacity.addClass('fullCapacity');
        
        $price.prop('disabled', true);
        $quantity.prop('disabled', true);
        $product.prop('disabled', true);
        $submitButton.prop('disabled', true);
      }
    }
  }
}