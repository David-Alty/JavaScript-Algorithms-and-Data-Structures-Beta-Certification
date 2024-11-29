const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");



function decToBinary(num) {
    
    let decToBin = [];
    let con = true;
    const decNUmber = num;

    while(con) {
        if(num%2 == 0) {
         decToBin.unshift(0)
        }
        else 
        {
         decToBin.unshift(1)
        } 
        num = Math.floor(num/2);
     
        if(num==1) {
         con=false;
         decToBin.unshift(1)
     
            }
         }
   return   `${decNUmber} decimal number is [${decToBin.join(" ")}],[${decToBin.length}] bits in Binary number system.`;
}


