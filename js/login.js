// document.getElementById('btn-login')
//   .addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('Button Clicked');
//     const phoneNumber = document.getElementById('phone-number').value;
//     console.log(phoneNumber);
//   });

document.getElementById('btn-login').
  addEventListener('click',function(event){
    const phoneNumber = document.getElementById('phone-number').value;
    const PinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '9' && PinNumber === '1234'){
      console.log('You are logged In');
    }else{
      console.log('Wrong Phone Number or Pin Number');
    }
});