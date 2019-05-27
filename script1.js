function plus() {

   let a1 = document.getElementById("first_number").value;
   a1 = parseInt(a1);

   let b1 = document.getElementById("second_number").value;
   b1 = parseInt(b1);

   let result = a1+b1;

   document.getElementById("result").innerHTML=result;
}
function minus() {

   let a1 = document.getElementById("first_number").value;
   a1 = parseInt(a1);

   let b1 = document.getElementById("second_number").value;
   b1 = parseInt(b1);

   let result1 = a1-b1;

   document.getElementById("result").innerHTML=result1;
}


// function plus(a,b) {
//     a = document.getElementById("first_number").value;
//     b = document.getElementById("second_number").value;
//     return a-b;
// }