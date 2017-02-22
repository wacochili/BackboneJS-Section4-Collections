// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Vehicles = Backbone.Collection.extend({ 
	model: Car, 
 
	url: “/api/vehicles 
});

var vehicles = new Vehicles([
	new Car({ registrationNumber: "XLI887", color: "Blue" }),
	new Car({ registrationNumber: "ZNP123", color: "Blue" }),
	new Car({ registrationNumber: "XUV456", color: "Gray" })
]);

var blueCars = vehicles.where({ color: "Blue" });

console.log(blueCars);
