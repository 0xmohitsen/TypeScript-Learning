type BookInterface = {
    name : string;
    pages: number;
}

// type can not extends interface/ types

// types can not be implemented by classes

// type lets you use unions( & ) | ors ( | )

function displayBook(book: BookInterface): string {
    return "Book name : " + book.name;
}

const book1 = displayBook({
    name: "The boy and heron",
    pages: 124
});

console.log(book1);

// understand 3rd statement

interface Circle {
    radius: number;
    borderWidth?: number; //optional property
}

interface Rectangle {
    width: number;
    height: number;
}

interface Square {
    side: number;
}

// renderShape function has to add new interfaces like this Circle | Rectangle | Square) 

// here we can use types to do this 

// suppose we want to add Pentagon simply add in Shape.

type Shape = Circle | Rectangle | Square;

function renderShape(shape: Shape) {
    console.log("Shape is rendered!");
}

renderShape({
    radius: 10
})