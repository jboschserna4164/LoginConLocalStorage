const loginform = document.querySelector('#loginform')

loginform.addEventListener('submit', (e) => {
    e.preventDefault()

    const mail = document.querySelector('#email').value;
    const contraseña = document.querySelector('#password').value;

    const Users = JSON.parse(localStorage.getItem('users')) || []

    const validUser = Users.find(user => user.mail === mail && user.password === contraseña)
    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!')
    }
    alert('Bienvenido')

    localStorage.setItem('login_success', JSON.stringify(validUser))

    window.location.href = 'index.html'

})