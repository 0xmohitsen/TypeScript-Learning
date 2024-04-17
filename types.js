// type can not extends interface/ types
// types can not be implemented by classes
// type lets you use unions( & ) | ors ( | )
function displayBook(book) {
    return "Book name : " + book.name;
}
var book1 = displayBook({
    name: "The boy and heron",
    pages: 124
});
console.log(book1);
function renderShape(shape) {
    console.log("Shape is rendered!");
}
renderShape({
    radius: 10
});
