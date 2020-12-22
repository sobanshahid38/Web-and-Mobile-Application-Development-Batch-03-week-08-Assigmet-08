var user_input= parseInt(prompt("Enter the value you wanted to check: "));
var prime=true;

if (user_input==1) {

    alert("not a prime number ")
    
    
}
else{
    for(var min=2;min<=user_input/2 ; min++)
    {
    if(user_input%min==0){
    prime=false;
    break;
    
    }
    }
    
    if (prime==true) {
        alert("The number is prime");
        
    } else {
        alert("The number is not prime");
        
    }
}
 
