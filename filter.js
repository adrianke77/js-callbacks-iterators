var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

// Your code here!

people.filter(isCool).forEach(function(person) {
console.log(person.name,"is cool");
});


// Write code that uses the filter function, and the below isCool function to return a list of people who are cool.

function isCool(person)  { //had to change function expression to function declaration otherwise above code can't callback it
	return person.coolnessScore > 20;
}

// Example results:
//
// Bob is cool
// Isolde is cool
