'use strict'

export class Greeter{
	name:string; // property of string type
	
	constructor(name:string){
		this.name = name;
	}
	

	// sayHello function with string return type
	sayHello():string{
		// Notice backtik ` in the below string litral not single quote '
		let greeting = `Hey ${this.name}, you did it!! Welcome to typed world of typescript.`;
		return greeting;
	}
}