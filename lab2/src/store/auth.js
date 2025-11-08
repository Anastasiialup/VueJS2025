export const auth = {
    login(email) {
        localStorage.setItem('user', JSON.stringify({ email }))
    },
    logout() {
        localStorage.removeItem('user')
    },
    get user() {
        return JSON.parse(localStorage.getItem('user'))
    }
}
