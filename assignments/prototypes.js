/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// GameObject Constructor
function GameObject(gameObj){
	this.createdAt = gameObj.createdAt;
	this.name = gameObj.name;
	this.dimensions = gameObj.dimensions;
};

GameObject.prototype.destroy =  function (){
	return `${this.name} was removed from the game.`;
};


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

// CharacterStats Constructor
function CharacterStats(charObj){
	GameObject.call(this, charObj);
	this.healthPoints = charObj.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function (){
	return `${this.name} took damage`;
}



/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
// Humanoid Constructor
function Humanoid(humanObj) {
	CharacterStats.call(this, humanObj);
	this.team = humanObj.team;
	this.weapons = humanObj.weapons;
	this.language = humanObj.language;
};



// Inheriting prtotypes from GameObject and CharacterStats
// Humanoid.prototype = Object.create(GameObject.prototype);
Humanoid.prototype = Object.create(CharacterStats.prototype);


// Humanoid Prototype
Humanoid.prototype.greet = function(){
	return `${this.name} offers a greeting in ${this.language}`;
};


/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
	});

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
	});
	

	

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
	// * Create two new objects, one a villain and one a hero and fight it out with methods!
	
	function Villan (villanObj){
		Humanoid.call(this, villanObj);

	}

	Villan.prototype.strike = function () {
		 let health = this.healthPoints
		return function() {
			health -= 2
			return health
			
		}

	}



	function Hero(heroObj){
		Humanoid.call(this, heroObj);
	}

	Hero.prototype.obsorb = function counter() {

		let count = this.healthPoints;
	
		return function(){
			count -= 5
			return count;
		};
		

	};


	const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Our Hero',
    team: 'Lightness',
    weapons: [
      'Lightning Bolt',
      'Horn',
    ],
    language: 'Gods',
	});
	

	const villan = new Villan({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'The Villan',
    team: 'Dark Side',
    weapons: [
      'Sticks',
      'Stones',
    ],
    language: 'Death',
	});
	

	let strike = villan.strike()
	console.log(strike);
	console.log(strike);
	console.log(villan.healthPoints);


