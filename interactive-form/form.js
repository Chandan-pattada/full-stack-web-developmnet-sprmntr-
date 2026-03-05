document.getElementById("myForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value.trim();

let message = document.getElementById("message");

if(name === "" || email === "" || password === ""){
message.textContent = "Error: All fields are required";
message.className = "error";
}
else if(!email.includes("@")){
message.textContent = "Error: Enter valid email";
message.className = "error";
}
else{
message.textContent = "Form submitted successfully!";
message.className = "success";

document.getElementById("myForm").reset();   // ⭐ clears all inputs
}

});