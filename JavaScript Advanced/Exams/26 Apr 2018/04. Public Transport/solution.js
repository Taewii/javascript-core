class PublicTransportTable {
  constructor(town) {
    $('caption').text(`${town}'s Public Transport`);
    this.attachEvents();
  }
  
  addVehicle(obj) {
    $('.vehicles-info')
      .append($('<tr>').addClass('hide-info')
        .append($('<td>').text(obj.type))
        .append($('<td>').text(obj.name))
        .append($('<td>').append($('<button>').text('More Info').on('click', moreOrLessInfo))));
    
    function moreOrLessInfo() {
      const $parent = $(this).parent().parent();
      if (this.textContent === 'More Info') {
        $parent.prop('class', 'show-info');
        this.textContent = 'Less Info';
        $parent.after(
          `<tr class="more-info">
              <td colspan="3">
                  <table>
                      <tr><td>Route: ${obj.route}</td></tr>
                      <tr><td>Price: ${obj.price}</td></tr>
                      <tr><td>Driver: ${obj.driver}</td></tr>
                  </table>
              </td>
          </tr>`);
      } else {
        $parent.next().remove();
        $parent.prop('class', 'hide-info');
        this.textContent = 'More Info';
      }
    }
  }
  
  attachEvents() {
    const $type = $('[name="type"]');
    const $name = $('[name="name"]');
    
    $('.search-btn').on('click', search);
    $('.clear-btn').on('click', clear);
    
    function search() {
      const type = $type.val();
      const name = $name.val();
      
      $('.vehicles-info > tr').css('display', '').each((i, vehicle) => {
        const $vehicle = $(vehicle);
        if (!$vehicle.hasClass('more-info')) {
          const currentType = $vehicle.children()[0].textContent;
          const currentName = $vehicle.children()[1].textContent;
          
          if (currentType.indexOf(type) === -1 || currentName.indexOf(name) === -1) {
            $vehicle.css('display', 'none');
            if ($vehicle.hasClass('show-info')) {
              $vehicle.prop('class', 'hide-info');
              $vehicle.children()[2].children[0].textContent = 'More Info';
              $vehicle.next().remove();
            }
          }
        }
      });
    }
    
    function clear() {
      $('.vehicles-info > tr').css('display', '');
      $type.val('');
      $name.val('');
    }
  }
}

$(function () {
  let publicTransportTable = new PublicTransportTable('Sofia');
  
  let vehiclesDataArr = [
    {
      type: 'bus',
      name: '84',
      route: 'Sofia airport - Gen. Gurko str.',
      price: 1.60,
      driver: 'Pesho'
    },
    {
      type: 'tram',
      name: '7',
      route: 'Borovo - metro station Han Kubrat',
      price: 13.37,
      driver: 'Misho'
    },
    {
      type: 'bus',
      name: '280',
      route: 'Student city - SU Kliment Ohridsky',
      price: 4.20,
      driver: 'Gosho'
    },
    {
      type: 'trolleybus',
      name: '11',
      route: ' Drujba 1 - Stochna station sq.',
      price: 2.60,
      driver: 'Tosho'
    },
    {
      type: 'metro',
      name: 'M1',
      route: 'Slivnica - Business Park',
      price: 3.50,
      driver: 'Petq'
    },
    {
      type: 'bus',
      name: '404',
      route: 'AP Drujba - Central station',
      price: 1.60,
      driver: 'Silviq'
    },
    {
      type: 'metro',
      name: 'M2',
      route: 'Sofia airport - James Bourchier',
      price: 5.99,
      driver: 'Krum'
    },
    // You can add/remove any vehicles data objects here
  ];
  
  for (let vehicleObj of vehiclesDataArr) {
    publicTransportTable.addVehicle(vehicleObj);
  }
});