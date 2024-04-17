function greet(person) {
    return "Hello " + person.name + ", Happy Birthday you are now " + person.age + " years old";
}
var greetingMessage = greet({
    name: "Mohit",
    age: 24
});
console.log(greetingMessage);
// classes can be implemented using interfaces
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Your name is " + this.name;
    };
    return Person;
}());
var personObj1 = new Person("Mohit", 24);
console.log(personObj1);
console.log(personObj1.greet());
function greetPolitely(person) {
    return "person's gender : " + person.genderProp.gender;
}
console.log(greetPolitely({ name: "Dam", age: 23, genderProp: {
        gender: "male",
        orientation: "straight",
        pronounce: "he"
    } }));
