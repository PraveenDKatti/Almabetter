// Do not remove nor make any changes in  main() function
function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());
    var c = parseInt(readLine());
    console.log(secondImportant(a,b,c));
}
const secondImportant = function(a,b,c){
   // Your code goes here
   return [a,b,c].sort()[1]
};