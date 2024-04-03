const generatePassword = () => {
    const length = 12

    // all the characters and signs
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'

    let password = ''
    for (let i =0; i< length; i++){
        const randomIndex = Math.floor(Math.random() *charset.length)
        password += charset[randomIndex]
    }
    document.getElementById('password').value = password

}

const Show = document.getElementById('generate')
Show.addEventListener('click', generatePassword);
