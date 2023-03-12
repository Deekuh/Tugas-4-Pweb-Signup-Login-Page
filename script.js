
function create_account() {
    var n=document.getElementById("n1").value;
    var e=document.getElementById("e1").value;
    var p=document.getElementById("p1").value;
    var cp=document.getElementById("p2").value;
    
    //Code for password validation
    var letters=/^[A-Za-z]+$/;
    var email_val=/^([a-zA-Z0-9])+\@([a-zA-Z0-9])+(\.)+([a-zA-Z0-9])+$/;
    
    //Other validation required code
    if(n=='' || e=='' || p=='' || cp==''){
        alert("Fields cannot be empty!");
    }
    else if(!letters.test(n)){
        alert('Invalid name format! Name must contain alphabets only');
    }
    else if(!email_val.test(e)){
        alert("Invalid email format! Please enter valid email address");
    }
    else if(p!=cp){
        alert("Password does not match!");
    }
    else if(document.getElementById("p1").value.length < 6){
        alert("Password must be at least 6 characters!");
    }
    else if(document.getElementById("p1").value.length > 12){
        alert("Password cannot be more than 12 characters!");
    }
    else{
        alert("Your account has been created successfully!\nRedirecting to login page . . .");
        window.location="login.html"
    }
}

function log_in() {
    var e=document.getElementById("e1").value;
    var p=document.getElementById("p1").value;
    
    var email_val=/^([a-zA-Z0-9])+\@([a-zA-Z0-9])+(\.)+([a-zA-Z0-9])+$/;
    
    if(e=='' || p==''){
        alert("Fields cannot be empty!");
    }
    else if(!email_val.test(e)){
        alert("Invalid email format! Please enter valid email address");
    }
    else{
        alert("Login successful!");
    }
}
