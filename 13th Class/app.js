

    //   Table from  1  to  100 

 for(var a = 1; a <= 100; a = a+10){
     for(var b = a; b <= a + 9 ; b++){
         document.write(b + " ");
     }
     document.write("<br>")
 }


 

var cities = ["Karachi","Lahore","Islamabd","Hyderabad"];

var myCity = prompt("Enter City")
alert(myCity.toUpperCase());
alert(myCity.toLowerCase());

for(var i=0; i< cities.length; i++){
    if(cities[i] === myCity){
        alert("City Found");
    }else{
        alert("City Nost Found")
    }
}


   

var month = prompt("Enter a month");
    
alert(month);
var monthLength = month.length;
alert(monthLength);

if(monthLength > 3){
    alert("Correct input");
    alert(month.slice(0,3));
} else {
    alert("Wrong input");
    alert(month);
} 
