var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.print = function () {
        console.log('\n### USER: ###');
        console.log('* Name: ' + this.name);
        if (this.age) {
            console.log('* Age: ' + this.age);
        }
    };
    return User;
}());
var u = new User('AJ');
u.print();
var u = new User('Em', 18);
u.print();
