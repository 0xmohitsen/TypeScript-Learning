interface PersonInterface {
    name: string;
    age: number;
}

interface PersonInterface1 {
    name: string;
    age: number;
    greet(): string;
}

function greet(person: PersonInterface): string {
    return "Hello " + person.name + ", Happy Birthday you are now " + person.age + " years old";
}

const greetingMessage = greet({
    name: "Mohit",
    age: 24
});

console.log(greetingMessage);


// classes can be implemented using interfaces

class Person implements PersonInterface1 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return "Your name is " + this.name;
    }

}

const personObj1 = new Person("Mohit", 24);

console.log(personObj1);
console.log(personObj1.greet());

// one interface can use another interface
interface PersonGenderInterface {
    gender: string;
    orientation: string;
    pronounce: string;
}

interface PersonInterface3 {
    name: string;
    age: number;
    genderProp: PersonGenderInterface;
}

function greetPolitely(person: PersonInterface3): string {
    return "person's gender : " + person.genderProp.gender; 
}

console.log(greetPolitely({name: "Dam", age: 23, genderProp: {
    gender: "male",
    orientation: "straight",
    pronounce: "he"
}}));


// one interface can extends other interface
interface PersonGenderInterface1 {
    gender: string;
    orientation: string;
    pronounce: string;
}

interface PersonInterface4 extends PersonGenderInterface{
    name: string;
    age: number;
    // if you want gender interface properties right next to age 
    // like this    gender: string;
                //  orientation: string;
                //  pronounce: string;

    // we can extends this interface using PersonGenderInterface
}
