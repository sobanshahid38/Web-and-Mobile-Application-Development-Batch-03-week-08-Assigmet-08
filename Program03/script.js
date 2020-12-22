var sub_math=parseInt(prompt("Enter your marks in Math: "));

var sub_Computer=parseInt(prompt("Enter your marks in Computer: "));

var sub_phy= parseInt(prompt("Enter your marksi in physics: "));

var total_marks=sub_math+sub_phy+sub_Computer;

console.log("Marks in Math: ", sub_math);

console.log("Marks in Computer: ",sub_Computer);

console.log("Marks in Physics: ", sub_phy);

var avrg_marks= total_marks/3;

console.log("Total marks: ",total_marks);

console.log("Average of Marks : " , avrg_marks);

if ( avrg_marks>=80 ) {
    alert("You are above standered, Admission is granted.");
} else {
    alert("You are not above standered, better luck next time.")
}
