const fs = require('fs');

//Challenge 1: Simply print the contents of the text file to the screen
let data = fs.readFileSync("./challenge1/info.txt", "utf8");
console.log(data);

//Challenge 2: Add the names of everyone in your group to the end of the text file
let names = ['Chelsea ', 'Lauren ', 'Albert ', 'Todd ', 'Nhan '];
for(let i=0; i<names.length; i++){
  fs.appendFileSync('./challenge2/info.txt', names[i]);
}
console.log(names);

//Challenge 3: The file was incorrectly named binfo.txt ... Rename it to info.txt (only using js)!
// fs.renameSync('./challenge3/binfo.txt', './challenge3/info.txt');

//Challenge 4: Create a new folder within the challenge4 folder called "copyfolder". Then copy info.txt into that folder
try {
  fs.mkdirSync('./challenge4/copyfolder')
}catch(err){
  if(err.code == 'EEXIST'){
    console.log('"Copy folder" directory exists!');
  }else{
    console.log(err);
  }
}
fs.copyFileSync('./challenge4/info.txt', './challenge4/copyfolder/info.txt');

//Challenge 5: Replace all of the "-"'s inside the text file with spaces
let change = fs.readFileSync("./challenge5/info.txt", "utf8");
let changed = change.replace(/-/g, " ");
console.log(changed);

//Challenge 6: Display all files that end with ".txt". Don't hard code the file names!
let folder = fs.readdirSync("./challenge6/");
for(let i=0; i<folder.length; i++){
  let txt = folder[i].slice(folder[i].length-4);
  if(txt === ".txt"){
    console.log(folder[i]);
  }
}
