1. Let's create a working folder first

   ```command
   mkdir nodejs-typescript
   ```

2. Open the folder in sublime text


3. Prepare sublime text for working with typescript by installing required packages
   - press cmd + shift + p to open sublime command palette
   - select "Package Control: Install Package", this will show package installer window where you can browse and install packages. If Package control is not installed follow instruction in the link "https://packagecontrol.io/installation" then repeat from steps.
   - search and install these packages "Typescript" and "SublimeLinter-tslint".
4. Make sue that you have node installed. If not check this link "https://nodejs.org/en/download/" to install node.


5. Initialize node project by running following command. you will be asked some questions, answer them or you may also skip them.
	```command
	npm init
	```

6. Package.json file will be created in the working folder.

7. Install necessary node packages in the project folder
   - "typescript" for transpailing typescript to javascript
		```
		npm install typescript --save-dev
		```
   - "ts-node" to run typescript files. This is wrapper to node to run .ts files 
		```
		npm install ts-node --save-dev
		```
    - "@types/node" which is typescript definations of node javascript api so that they can be used in typescript
		```
		npm install @types/node --save-dev
		```

8. Initialize typescript config. "npx" is command to run cli commands installed locally
	```npx tsc --init```

9. In sublime text right click on the root folder and create new files named "index.ts" and greeter.ts

10. Add following codes to greeter.ts file

	``` typescript
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
	```


11. Add following code to index.ts file. Do not forget to pass your name to Greeter constructor.
	``` typescript
	'use strict'

	import {Greeter} from './greeter' //import Greeter class exported in greeter module

	let greeter = new Greeter('Dev');

	console.log(greeter.sayHello());
	```

12. Open the package.json file and change script block to following
	``` json
	"scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "debug": "node --inspect-brk --require ts-node/register index.ts",
	    "start": "node --require ts-node/register index.ts"
	  },
	  ```

13. Now run the program
    - Open terminal and make sure your current director is root folder of this project
    - Run following command to run the program. Remember that we defined the start command in package.json file.
		``` command
		npm run start
		```
    - You should see greeting in the command terminal

14. Debug the program in chrome developer tools
    - Open terminal and cd to project rood directory
    - Run following commands, then terminal will wait for debugger to connect
		```command
		npm run debug
		```
    - Open chrome browser and enter following url in address bar "chrome://inspect". Then click link with text "Open dedicated DevTools for Node"
    - Chrome debugger will open with breakpoint at 1st line of index.ts

15. Thats all enjoy programming in nodejs with typescript




