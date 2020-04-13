function idCard(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Address: " + address);

    var fullName = firstName + ' ' + lastName;

    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAddress").innerHTML = address;

    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    console.log(" Age: " + age);
    console.log("Phone Number: " + phoneNumber);

   var numberArray = [];
   numberArray.push(age, phoneNumber);
    for(var i = 0; i < numberArray.length; i++){
        if(numberArray[i] <=100){
            document.getElementById("postAge").innerHTML = age; 
        }
        else if(numberArray[i] >100){
            document.getElementById("postPhoneNumber").innerHTML = phoneNumber;  
        }
    }
   
 
   
   
}
