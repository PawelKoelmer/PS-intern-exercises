const loadDataToForm = () =>{
    if(localStorage.getItem('formData')){
        const formdata = JSON.parse(localStorage.getItem('formData'));
        const form = document.getElementById('form1');
        form.elements[0].value = formdata['username'];
        form.elements[1].value = formdata['password'];
    }
}

const addFormSubmitHandler = () => {
    const submitButton = document.querySelector('#buttonForm');
    const form = document.getElementById('form1');
    submitButton.addEventListener('click', (event)=>{
        const username = form.elements[0].value;
        const password = form.elements[1].value;

        const formData = {username, password}
        window.localStorage.setItem('formData',JSON.stringify(formData))
        event.preventDefault();
        }
    )
}
loadDataToForm();
addFormSubmitHandler();