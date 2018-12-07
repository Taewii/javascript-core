function validate() {
  const $username = $('#username');
  const $email = $('#email');
  const $password = $('#password');
  const $confirmPass = $('#confirm-password');
  const $submitBtn = $('#submit');
  const $company = $('#company');
  const $companyInfo = $('#companyInfo');
  const $companyNumber = $('#companyNumber');
  let fieldsAreValid = true;
  
  $company.on('change', () => {
    if ($company.is(':checked')) {
      $companyInfo.css('display', 'block');
    } else {
      $companyInfo.css('display', 'none');
    }
  });
  
  $submitBtn.on('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    checkFields();
    showMessage();
    fieldsAreValid = true;
  });
  
  function setBorder(element, isValid) {
    if (isValid) {
      element.css('border', 'none');
    } else {
      element.css('border', 'solid red');
      fieldsAreValid = false;
    }
  }
  
  function validateCompany() {
    if ($company.is(':checked')) {
      const num = $companyNumber.val();
      setBorder($companyNumber, num >= 1000 && num <= 9999);
    }
  }
  
  function checkFields() {
    setBorder($username, /^[0-9A-Za-z]{3,20}$/.test($username.val()));
    setBorder($email, /^.*@.*?[.]+.*$/.test($email.val()));
    setBorder($password, /^(\w{5,15})$/.test($password.val()) && ($password.val() === $confirmPass.val()));
    setBorder($confirmPass, /^(\w{5,15})$/.test($confirmPass.val()) && ($password.val() === $confirmPass.val()));
    validateCompany();
  }
  
  function showMessage() {
    if (fieldsAreValid) {
      $('#valid').css('display', 'block');
    } else {
      $('#valid').css('display', 'none');
    }
  }
}
