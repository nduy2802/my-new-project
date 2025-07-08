let arr = [ 1, 2, 5, 10, 12, 15, 16, 16, 122];
 let max = arr[0];
 let vitri =0  ;
 for (let i = 0; i < arr.length; i++) {
     if (arr[i] > max) {
         max = arr[i];
         vitri = i;
     }
 }
 document.write("Mảng: [" + arr.join(", ") + "]<br>");
 document.write("Phần tử lớn nhất là: " + max + " tại vị trí: " + vitri);