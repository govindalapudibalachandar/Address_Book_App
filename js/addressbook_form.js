//**addingevenlistener to name


const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function() {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
        textError.textContent="";
    else textError.textContent = "Name is Incorrect";
});

//**add evenlistener to phonenumber */
const tel = document.querySelector('#tel');
      const telError = document.querySelector('.tel-error');
      tel.addEventListener('input',function() {
          let telRegex = RegExp('^([0-9]{2}[\\-])*[0-9]{10}$');
          if(telRegex.test(tel.value))
              telError.textContent="";
          else telError.textContent = "Telephone Number is Incorrect";
      });