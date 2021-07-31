//! question one 

var itemsArray =
    [
        { name: "juice", price: 50, quantity: 3 },
        { name: "cookie", price: 30, quantity: 9 },
        { name: "shirt", price: 880, quantity: 1 },
        { name: "pen", price: 100, quantity: 2 }
    ];
    
document.write(`Answer 1 <br> <br>`)
for (let i = 0; i < itemsArray.length; i++) {
    var eachItemPrice = itemsArray[i].price * itemsArray[i].quantity
    document.write(`All ${itemsArray[i].name} price = ${eachItemPrice} <br>`)
}
document.write(
    `All items price =  ${itemsArray.reduce((a,b) => a + b.price * b.quantity,0)}`
)

//! question two

var obj = {
    name: 'ishaq', email: 's@m.com', password: 090078601, age: 25,
    gender: 'Male', city: 'karchi', country: 'pakistan'
}
document.write(`<hr> Answer 2 <br> <br> Age = ${obj.age} <br> Country = ${obj.country} <br> FirstName = ${obj.firstName} <br> LastName = ${obj.laststName}`)


//! question three

function Student(name, course, age, id, gender) {
    this.name = name,
        this.course = course,
        this.age = age,
        this.id = id,
        this.gender = gender
}

document.write(`<hr> Answer 3 <br> <br> check in console`)

var student1 = new Student('bilal', 'web n App', 21, 21021, 'male')
var student2 = new Student('ahmed', 'web n App', 20, 20021, 'male')
console.log(`Answer 3 =`)
console.log(student1)
console.log(student1)


//! question four

function Place(name, address, gender, education, profession) {
    this.name = name;
    this.address = address;
    this.gender = gender;
    this.education = education;
    this.profession = profession;
}

var arr = []
function myFunc() {
    var name = document.getElementById('1').value
    var address = document.getElementById('2').value
    if (document.getElementById('3').checked) {
        var gender = 'male';
    } else if (document.getElementById('4').checked) {
        var gender = 'female';
    }
    var education = document.getElementById("5").value;
    var profession = document.getElementById("6").value;
    var objects = [new Place(name, address, gender, education, profession)]
    arr.push(objects[0])
    console.log(arr)
    var table = document.getElementById("7");
    for (var obj of objects) {
        let tr = table.insertRow(-1);
        tr.insertCell(-1).textContent = obj.name;
        tr.insertCell(-1).textContent = obj.address;
        tr.insertCell(-1).textContent = obj.gender;
        tr.insertCell(-1).textContent = obj.education;
        tr.insertCell(-1).textContent = obj.profession;
    }
}