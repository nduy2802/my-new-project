let cout = 0;
let number = 1 ;
let sum = 0;

 while (cout < 30) {
     if ( number % 7 === 0) {
         sum = sum + number;
         cout ++;
     }
     number ++;

 }
 alert("Tổng số số chia hết cho 7 là: " + sum);