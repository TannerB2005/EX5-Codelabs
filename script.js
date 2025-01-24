//Ex 1
// const car = {
//     make: "Toyota",
//     model: "Prius",
//     year: "2018",
//     getInfo: function() { console.log(car);}
// };

//Ex 3
function changeColor() {
    document.getElementById("myDiv").style.backgroundColor = "blue";
}

//Ex 4
function changeText() {
    document.getElementById('myButton').textContent = 'Im changed!';
}

//Ex 5
const button = document.getElementById('addList');
 function addListItem() {
    const list = document.getElementById('itemList');
    const newList = document.createElement('li');
    newList.textContent = 'New Item';
    list.appendChild(newList);
};


