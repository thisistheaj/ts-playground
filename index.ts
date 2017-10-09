class User {
    constructor(public name: string, public age?: number) {}

    print() {
        console.log('\n### USER: ###');
        console.log('* Name: ' + this.name);
        if (this.age) {
            console.log('* Age: ' + this.age);
        }
    }
}

let u = new User('AJ');
u.print();

let u = new User('Em', 18);
u.print();