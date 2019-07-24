/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding, by default the 'this' keyword will bind it's self to the window object when refrenced in the context of console.log(this) and nothing else
* 2. Implicit Binding - Implicit binding happens when you are in an object and run a method using 'this' in that object. In this context we are refrencing the object we are in.
* 3. new Binding - Whenever a constructor function is used, 'this' refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit binding - This overrides which object 'this' is pointing to. with the use of the call, apply OR bind methods.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2
// code example for Implicit Binding
const person = {
	name: 'Kyle',
	age: 2,
	greet: function (){
		return `Hi my name is ${this.name} idk how im talking right now because I am ${this.age} years old`
	}
}

console.log(person.greet());

// Principle 3
// code example for New Binding
function Person(obj){
	this.name = obj.name;
	this.age = obj.age;
}

Person.prototype.speak = function () {
	return `Hello, my name is ${this.name} and I am ${this.age} years old`;
}

const billy = new Person({
	name: 'Billy',
	age: '45'
})


// Principle 4
// code example for Explicit Binding

const joe = new Person({
	name: 'Joe',
	age: 24
})

console.log(billy.speak.call(joe)); //invokes immediately
