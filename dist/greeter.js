(function () {
    function greeter(person) {
        return "Hello, " + person;
    }
    var user = "Jane User";
    // let user = [0, 1, 2];
    document.body.innerHTML = greeter(user);
})();
