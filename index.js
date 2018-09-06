// Code your solutions in this file
function printBadges(employee){
  for (let i=0; i<employee.length; i++){
    console.log(`Welcome ${employee[i]}! You are employee #${i+1}.`);
  }
  return employee;
  
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function tailsNeverFails(){
  let tails=0;
  while(maybeTrue()){
   
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}