//testing how to use require
const path = require('path');


const questions = [
"What's your name?",
"What's your favorite food?",
"What's your biggest aspiration?",
"How do you learn things?"];
const answers = [];
const ask = (i)=>{
    process.stdout.write(`\n\n\n\n${questions[i]}`);
    process.stdout.write(" >>> ");
};

process.stdin.on('data', (data)=>{
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        ask(answers.length);
    }else{
        process.exit();
    }

});
process.on('exit', ()=>{
    answers.forEach((answer,i)=>{
        process.stdout.write(` ${questions[i]} Answer: ${answer}.`);
        process.stdout.write("\n");
    });
});
ask(0);
// //printing the directory
// console.log(__dirname);
// //printing the full directory
// console.log(__filename);

// console.log(`Rock on World from ${process.argv}`);

// //a functhion to read from arguments
// const grab = (flag)=>{
//     const index  = process.argv.indexOf(flag);
//     return (index === -1) ? null : process.argv[index+1];
// }

// //defining the arguments
// const greeting = grab('--greeting');
// const user = grab('--user');
// if(!user || !greeting){
//     console.log("You blew it!");

// }else{
//     console.log(`Welcome ${user}, ${greeting}`);
// }

// //this is a way to write to the console
// //similar to System.out.println()
// process.stdout.write("Hey, What's up?");