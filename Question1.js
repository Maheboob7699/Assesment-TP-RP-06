let bob=[3,2,1];
let alicepoint=0;
let bobpoint=0;

for(let i=0; i<alice.length; i++){
if(alice[i] > bob[i]){
alicepoint++;
console.log(   "alicepoint"+ alicepoint);
}

else if(alice[i]< bob[i]){
    bobpoint++;
    console.log(  "bobpoint"+ bobpoint);
}
  else{
    console.log("Both are same Point");
  }
