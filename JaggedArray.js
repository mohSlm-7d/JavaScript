// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//console.log("Welcome to Programiz!");

let Arrays = this.prompt('Enter the no of collections (iterable collections) you want to store');
let JaggedArray=new Array(Arrays)
for(i=0; i<JaggedArray.length; i++){
    JaggedArray[i] = new Array(i+2)
}

for(i=0; i<JaggedArray.length; i++){
    for(j=0; j<JaggedArray[i].length; j++)
    JaggedArray[i][j]=0
}

for(i=0; i< JaggedArray.length; i++){
    for(j=0; j<JaggedArray[i].length;j++){
    console.log(`${JaggedArray[i][j]}\t`)
    }
    console.log("\n")
}
