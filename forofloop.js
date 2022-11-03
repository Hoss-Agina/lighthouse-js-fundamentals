const amounts = [61.00, 52.25, 112.99, 5.00]; 

//create a for of loop to add the sum of all the elements in the array
total=0;

for (let amount of amounts) {
  total = total+amount;
}

console.log(total);