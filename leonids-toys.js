const toys = [
 {
    id: 1,
    name: "GI Joe",
    type: "Action Figure",
    manufacturer: "Hasbro",
    price: 1000,
    weight: 5.2,
    batteryOperated: false
},

{
    id: 2,
    name: "Operation",
    type: "Board Game",
    manufacturer: "Hasbro",
    price: 2000,
    weight: 33.9,
    batteryOperated: true
},

{
    id: 3,
    name: "Lego Batman",
    type: "Assembly",
    manufacturer: "The LEGO Group",
    price: 3000,
    weight: 45.7,
    batteryOperated: false
}
];

const newToy1 = {
    id: 4,
    name: "Battle Ship",
    type: "Board Game",
    manufacturer: "Hasbro",
    price: 4000,
    weight: 33.9,
    batteryOperated: true
}

const newToy2 = {
    id: 5,
    name: "Barbie",
    type: "Action Figure",
    manufacturer: "Mattel",
    price: 5000,
    weight: 33.9,
    batteryOperated: false
}

// console.log(toys)//
toys.push(newToy1);
toys.push(newToy2);

// for (const toy of toys) {
    // console.log(toy.name)
// } 

for (const toy of toys) {
    toy.price = toy.price + 0.5                                        
    console.log(`The ${toy.name} is made by ${toy.manufacturer} and costs ${toy.price} in Russian Ruble. `)
}