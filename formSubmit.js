const addFormSubmitHandler = () => {
    const form  = document.querySelector('#form1')[0];
     form.submit = (event) => {
         console.log('x')
         console.log(form.elements['password'])
         event.preventDefault();
        return false;
    }
   //  form.addEventListener('onsubmit', (event) => {
   //      event.preventDefault();
   // return false; })
}

addFormSubmitHandler();