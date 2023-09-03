const userLogin = (req, res) => {
    res.send('User login')

}

const userSignIn = (req, res) => {
    res.send('User signin')
}

export default {
    userLogin,
    userSignIn
}