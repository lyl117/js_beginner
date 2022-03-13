// if statement
const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
rl.on("line", (line) => {
    if(line >= 50){
        console.log('우산을 챙긴다.');
    }else{
        console.log('그냥 간다.');
    };
    rl.close();
});
 
rl.on('close', () => {
        process.exit();
})

//if, else if, else 
const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
 
rl.on("line", (line) => {
    if(line >= 1000){
        console.log('택시');
    }else if (line >=500){
        console.log('버스');
    }else if (line >=300){
        console.log('지하철');
    }else{
        console.log('도보');
    }
    rl.close();
});
 
rl.on('close', () => {
        process.exit();
})

