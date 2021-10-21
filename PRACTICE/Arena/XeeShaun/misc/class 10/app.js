// var a = prompt("Enter your age" , "Your age is:");
// alert(a); 

// var a = +prompt("Enter your value" , "Your value is: ");
// var b = a + 10;
// alert("Your value is:" + " " + b);  


// var x = "Enter value";
// var y = "Your value is: ";
// var a = +prompt(x,y);
// var b = a + 10;
// document.write("The output is" + " " + b);

// var age = +prompt("Enter you age: ");

// if(age == 28){
//     alert("Your age is Equal: ")
// }
// else if(age > 28){
//     alert("Your age is more: ")
// }
// else{
//     alert("your age is less: ")
// }

// var age = +prompt("Enter your age");
// var gender = prompt("male");
// if (age == 28 || gender == "male"){
//     alert("Your are allowed to enter")
// }
// else{
//     alert("Get Out")
// }


// var a = prompt(a);
// if (a == 6){
//     alert("true")
// }
// else {
//     alert("false")
// }


// var x = 5;
// var y = 10;
// var a = 30;
// var b = 15;

// if (x+y === a-b){
//     alert("correct")
// }
// else{
//     alert("incoreect")
// }


// var a = +prompt("Please Enter Your Number")
// if(a !== 100){
//     document.write("Valid Number")
// }
// else{
//     document.write("wrong Number")
// }
 

// var percent = +prompt("Please enter your percent");
// if (percent >= 80 && percent <= 100)
// {
//     alert("Your Percentage is : "  + " " + " " +  "A+")
// }

// else if (percent >= 70 && percent <= 80 )
// {
//     alert("A")
// }

// else if (percent >= 60 && percent <= 70)
// {
//     alert("B")
// }

// else if(percent >= 50 && percent <= 60){
//     alert("C")
// }

// else if(percent >= 40 && percent <= 50){
//     alert("D")
// }

// else if(percent >= 33 && percent <= 40){
//     alert("E")
 
// }


// else if(percent >= 00 && percent <= 30){
//     alert("Failed")
// }
//  else{
//      alert("You did not write correct percentage")
//  }



// if (c === d)
//         {
//         if (x === y)
//         {
//             g = h;
//         }
// else if (a === b)
//     {
//     g = h;
//     }
// else
//     {
//     e = f;
//     }
//     }
// else
//     {
//     e = f;
//     }



// var students = ["zee","zee1","zee2"]
// alert("Student One: " + students[1]);  


// var pet = [];

// pet[0] = "ghous"
// alert("pet:" + pet[0]);




// //ADD AND REMOVE LAST INDEX ELEMENTS IN ARRAYS 

// var students = ["zee0" , "zee1" , "zee2"];

// alert(students[0]);

// students.pop("2"); // LAST REMOVE ELEMENTS
// alert(students);

// students.push("zeeshan" , "ali"); //ADD ELEMENTS AT LAST
// alert(students);




//  var students = ["zee0" , "zee1" , "zee2" , "zee3" , "zee4" , "zee5"]

//  students.splice(5, 1 , "Shush") //remove and add a perticular element in Array
// alert(students);


var students = ["zee0" , "zee1" , "zee2" , "zee3" , "zee4" , "zee5"]

var copyStudents = students.slice(0 , 5); // selecting target value

alert(copyStudents);  //Copy elements of an Array into another Array

document.write(copyStudents); 


