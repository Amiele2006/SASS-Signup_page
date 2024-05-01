function verifyPassword(){
    const password=document.getElementById("password");

    //getting password value
    const passwordverifying= password.value;

// check password field
   if (passwordverifying === ""){
    alert("Enter password")
   } 

//minimum password length
   if( 15 < passwordverifying.length < 8) {  
    alert("Passwords should not be less than 8 characters or more than 15 characters");
 }  
}
button=document.getElementById("submit");
button.addEventListener ('click', verifyPassword);



function Confirmingpassword() {
    const confirming=document.getElementById("password1");
    const password=document.getElementById("password");

    const passwordchecking= password.value;
    const confirmingpasswordhandler = confirming.value;

    // check password field
   if (confirmingpasswordhandler === ""){
    alert("Enter Password");
   } 

   // check confirm password field
   if (confirmingpasswordhandler === passwordchecking){
      //passwords match , do nothing
   }  else {
      alert("Passwords don't match");
   }    
}
//adding an event listener
button=document.getElementById("submit");
button.addEventListener ('click', Confirmingpassword);


