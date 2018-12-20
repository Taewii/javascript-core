function makeReservation(containerID) {
  const $fullName = $('#fullName');
  const $email = $('#email');
  const $phoneNumber = $('#phoneNumber');
  const $address = $('#address');
  const $postalCode = $('#postalCode');
  const $infoPreview = $('#infoPreview');
  const $submitButton = $('#submit');
  const $editButton = $('#edit');
  const $continueButton = $('#continue');
  const $container = $(containerID);
  
  let fullName;
  let email;
  let phoneNumber;
  let address;
  let postalCode;
  
  $submitButton.on('click', submitForm);
  $editButton.on('click', editForm);
  $continueButton.on('click', continueProcess);
  
  function submitForm() {
    if ($email.val() && $fullName.val()) {
      fullName = $fullName.val();
      email = $email.val();
      phoneNumber = $phoneNumber.val();
      address = $address.val();
      postalCode = $postalCode.val();
      
      $infoPreview
        .append($('<li>').text(`Name: ${fullName}`))
        .append($('<li>').text(`E-mail: ${email}`))
        .append($('<li>').text(`Phone: ${phoneNumber}`))
        .append($('<li>').text(`Address: ${address}`))
        .append($('<li>').text(`Postal Code: ${postalCode}`));
      
      $fullName.val('');
      $email.val('');
      $phoneNumber.val('');
      $address.val('');
      $postalCode.val('');
      $editButton.prop('disabled', false);
      $continueButton.prop('disabled', false);
      $submitButton.prop('disabled', true);
    }
  }
  
  function editForm() {
    $fullName.val(fullName);
    $email.val(email);
    $phoneNumber.val(phoneNumber);
    $address.val(address);
    $postalCode.val(postalCode);
    
    $infoPreview.empty();
    $editButton.prop('disabled', true);
    $continueButton.prop('disabled', true);
    $submitButton.prop('disabled', false);
  }
  
  function continueProcess() {
    $container
      .append($('<h2>').text('Payment details'))
      .append($('<select>').attr('id', 'paymentOptions').addClass('custom-select')
        .append('<option selected disabled hidden>Choose</option>')
        .append($('<option>').val('creditCard').text('Credit Card'))
        .append($('<option>').val('bankTransfer').text('Bank Transfer')))
      .append($('<div>').attr('id', 'extraDetails'));
    
    $('#paymentOptions').on('change', extraDetails);
    
    $editButton.prop('disabled', true);
    $continueButton.prop('disabled', true);
    $submitButton.prop('disabled', true);
  }
  
  function extraDetails(e) {
    const $extraDetails = $('#extraDetails').empty();
    if (e.target.value === 'bankTransfer') {
      $extraDetails
        .append('<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>')
        .append($('<button>').attr('id', 'checkOut').text('Check Out'));
    } else if (e.target.value === 'creditCard') {
      $extraDetails
        .append($('<div>').addClass('inputLabel').text('Card Number').append($('<input>')))
        .append($('<br>'))
        .append($('<div>').addClass('inputLabel').text('Expiration Date').append($('<input>')))
        .append($('<br>'))
        .append($('<div>').addClass('inputLabel').text('Security Numbers').append($('<input>')))
        .append($('<br>'))
        .append($('<button>').attr('id', 'checkOut').text('Check Out'));
    }
    
    $('#checkOut').on('click', checkOut);
  }
  
  function checkOut() {
    $('#wrapper').empty().append($('<h4>').text('Thank you for your reservation!'));
  }
}