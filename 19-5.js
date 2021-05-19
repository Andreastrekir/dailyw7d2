//Part I
//Create a function getCarHonda(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
//The function should
//loop through the array of object and return the first car with the name “Honda*.
//then, return a string in the format This is a {car_make} {car_model} from {car_year}.
//Hint : Find an array method that returns the value of the first element in an array that pass a test.
//Use the cars inventory below

let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
 ];

const car = inventory.find(model => model.car_make == 'Honda');
console.log(car);


function getCarHonda (carInventory){
	const{car_make, car_year, car_model} = carInventory;
	return `This is a ${car_make} ${car_model} from ${car_year} `
}

console.log(getCarHonda(car));

//Part II
//Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
//the function should return an inventory that is sorted by car_year, ascending.
//Hint : Check out this tutorial on the sort method
//Use the cars inventory below:

let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

inventory.sort(function (x, y){
	return x.car_year - y.car_year;
});

console.log(inventory)










