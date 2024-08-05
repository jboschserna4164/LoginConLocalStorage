const singupform = document.querySelector('#singupform')

singupform.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const mail = document.querySelector('#email').value;
    const contraseña = document.querySelector('#password').value;

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.mail === mail)
    if (isUserRegistered) {
        return alert('El usuario ya esta registrado!')
    }

    Users.push({ name: name, mail: mail, password: contraseña })
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')

    //redireccion a login
    window.location.href = 'login.html'

})