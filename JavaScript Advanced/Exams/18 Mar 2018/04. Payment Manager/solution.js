class PaymentManager {
  constructor(title) {
    this.title = title;
  }
  
  render(id) {
    $(`#${id}`).append( /*html*/ `
      <table>
        <caption>${this.title} Payment Manager</caption>
        <thead>
          <tr>
            <th class="name">Name</th>
            <th class="category">Category</th>
            <th class="price">Price</th>
            <th>Actions</th>
          </tr>
       </thead>
        <tbody class="payments"></tbody>
        <tfoot class="input-data">
          <tr>
            <td><input name="name" type="text"></td>
            <td><input name="category" type="text"></td>
            <td><input name="price" type="number"></td>
            <td><button>Add</button></td></tr>
        </tfoot>
      </table>`);
    
    const $name = $(`#${id} input[name="name"]`);
    const $category = $(`#${id} input[name="category"]`);
    const $price = $(`#${id} input[name="price"]`);
    const $addBtn = $(`#${id} .input-data button`);
    $addBtn.on('click', addItem);
    
    function addItem() {
      const $payments = $(`#${id} .payments`);
      const name = $name.val();
      const category = $category.val();
      const price = +$price.val();
      
      if (name && category && price) {
        $payments.append( /*html */ `
        <tr>
          <td>${name}</td>
          <td>${category}</td>
          <td>${price}</td>
          <td><button>Delete</button></td>
        </tr>`);
        
        const $deleteBtn = $(`#${id} .payments button`);
        $deleteBtn.on('click', (e) => $(e.target).parent().parent().remove());
        
        $name.val('');
        $category.val('');
        $price.val('');
      }
    }
  }
}

$(function () {
  let paymentMangersData = [
    ['amazon', 'Amazon'],
    ['ebay', 'eBay'],
    ['walmart', 'Walmart'],
    // Others
  ];
  
  for (let [target, title] of paymentMangersData) {
    let paymentManager = new PaymentManager(title);
    paymentManager.render(target);
  }
});