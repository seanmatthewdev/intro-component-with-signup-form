const form = document.getElementById('form');


form.addEventListener('submit', e => {
    e.preventDefault();

    const first = form['firstname'].value;
    const last = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if(first ===''){
        addErrorTo('firstname', 'First Name is Required');
    } else {
        removeError('firstname');
    }

    if(last ===''){
        addErrorTo('lastname', 'Last Name is Required');
    } else {
        removeError('lastname');
    }

    if(last ===''){
        addErrorTo('email', 'Email is Required');
    } else if (!isValid(email)){
        addErrorTo('email', 'This not a Valid Email'); 
    } else {
        removeError('email');
    }

    if(password ===''){
        addErrorTo('password', 'Password is Required');
    } else {
        removeError('password');
    }

});

function addErrorTo(field, message){
    const formControl = form[field].parentNode;
    formControl.classList.add('error')

    const small = formControl.querySelector('small');
        small.innerText = message;
        small.style.opacity = '1';
}

function removeError(field){
    const formControl = form[field].parentNode;
    formControl.classList.remove('error')
    
    const small = form[field].parentNode.querySelector('small');
        small.style.opacity = '0';
}

function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }