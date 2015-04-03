var LoginService = function() {
    this.isLogged = false;
};

LoginService.prototype = {
    login(username, password) {
        this.isLogged = true;
        return true;
    },

    logout() {
        this.isLogged = false;
    }
};

module.exports = LoginService;
