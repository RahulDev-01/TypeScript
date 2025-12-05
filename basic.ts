// Types -> types -> dataTypes

// TypeScript Dosen't run -> Process -> JS Runs It

// Type Checker 

// : -> defines Types , Always use ` ` in Code

function greet(name: string): string {

    return `Hello ${name}`;

}

console.log(greet("rahul"));
// console.log(greet(42));


// Install Type Script  
// S-1 : npm init -y 
// S-2 : npm i -D typescript 
// S-3 : npx tsc --init
// S-4 : To Compile npx tsc
// S-5 : To Run -> node dist/index.js
// S-6 : In pakage.json -> "start":"node dist/index.js"  -> ,"dev":"npx tsc"