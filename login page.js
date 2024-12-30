const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
// Animation buttons
sign_up_btn.addEventListener("click",()=> {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click",()=> {
    container.classList.remove("sign-up-mode");
});

// Input value funtion here
var signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit',function(event){
    event.preventDefault()//
    var username = document.getElementById('username').value
    console.log(username);
    var useremail = document.getElementById('useremail').value
    console.log(useremail);
    var userpassword = document.getElementById('userpassword').value
    console.log(userpassword);
    // console.log(signUpForm);
})
// var message = document.getElementById('message');
// message.addEventListener('click',function(e){
//     var message = document.getElementById('message').id
//     console.log(message);
// })


// Button disappear function here
function isEmpty(){
    var returnval = true;   
    clearErrors();
    let username = document.getElementById('username').value;
    let useremail = document.getElementById('useremail').value;
    let userpassword = document.getElementById('userpassword').value
    if(((username!= "" && useremail!= "") && (useremail!= "" && userpassword!="")) || (username!= "" && userpassword!="") && (userpassword!="" && useremail!= ""))
    {
        document.getElementById("btn").removeAttribute("disabled");
        // returnval = false;
    }
   
    return returnval;
    
}

// Signup form validations
// for clear the error if user correct it in the form
function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = " ";
    }
}
function seterror(id, error){
    //sets error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;  

}
function submitFunction(){
    var returnval = true;
    clearErrors();
    // Signup function start here
    let name = document.forms['myForm']['fname'].value;
    if(name.length < 3){
        seterror("name", "*First name should three characters!");
        returnval = false;
    }
    let email = document.forms['myForm']['femail'].value;
    var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (!ck_email.test(email)){
        seterror("email","*You must enter a valid email address.");
        returnval = false;
    } 
    let password = document.forms['myForm']['fpass'].value;
    if(password.length < 6){
        seterror("password", "*Password should be minimum 6 characters!");
        returnval = false;
    }
    if((name.length > 3 && ck_email.test(email)) || (ck_email.test(email) && password.length > 6)){
        // Success Message
        document.getElementById("message").innerHTML="Hurrey! Signup success,Please check you inbox to verify email.";

        // const signUpForm = "signUpForm";
        const signup =  "signup";
        const IDOfMessage = "message";
    
      // This line submits the form. (If Ajax processed, call Ajax function, instead.)
      //   document.getElementById(signUpForm).submit();

      // This replaces the form with the replacement content.
      document.getElementById(signup ).innerHTML = document.getElementById(IDOfMessage).innerHTML;
        
    }

    // // const signUpForm = "signUpForm";
    // const signup =  "signup";
    // const IDOfMessage = "message";
    
    //   // This line submits the form. (If Ajax processed, call Ajax function, instead.)
    //   //   document.getElementById(signUpForm).submit();

    //   // This replaces the form with the replacement content.
    // document.getElementById(signup ).innerHTML = document.getElementById(IDOfMessage).innerHTML;  
    
    

    return returnval;
    
};



// Signin function started here
function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = " ";
    }
}
function seterror(id, error){
    //sets error inside tag of id

    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;  

}
function validateSiginForm() {    
    var returnval = true;
    clearErrors();
    
    let userlogin = document.forms['mysigninForm']['fname'].value;
    if(userlogin.length < 3){
        seterror("userlogin", "*Username should be three characters!");
        returnval = false;
    }

    let userpassword = document.forms['mysigninForm']['fpassword'].value;
    if(userpassword.length < 6){
        seterror("userpassword", "*Password should be minimum 6 characters!");
        returnval = false;
    }
    return returnval;
}  

// Forgot password validation
// for clear the error if user correct it in the form
function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = " ";
    }
}
function seterror(id, error){
    //sets error inside tag of id

    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;  

}
function validateForgotForm() {    
    var returnval = true;
    clearErrors();
    
    let Forgotemail = document.forms['forgotForm']['femail'].value;
    var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (!ck_email.test(Forgotemail)) {
        seterror("Forgotemail","You must enter a valid email address.");
        returnval = false;
    } 
    return returnval;
}  

// // Signup form validations
// // for clear the error if user correct it in the form
// function clearErrors(){
//     errors = document.getElementsByClassName('formerror');
//     for(let item of errors){
//         item.innerHTML = " ";
//     }
// }
// function seterror(id, error){
//     //sets error inside tag of id

//     element = document.getElementById(id);
//     element.getElementsByClassName('formerror')[0].innerHTML = error;  

// }
// function validateForm(){    
    
//     var returnval = true;
//     clearErrors();

//     //  perform validation and if fails, set the value of returnval to false
//     let name = document.forms['myForm']['fname'].value;
//     if(name.length < 3){
//         seterror("name", "*First name should three characters!");
//         returnval = false;
//     }


//     let email = document.forms['myForm']['femail'].value;
//     var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
//     if (!ck_email.test(email)){
//         seterror("email","*You must enter a valid email address.");
//         returnval = false;
//     }  
    
    
//      //    let whatsapp = document.forms['myForm']['fwhatsapp'].value;
//     //     if(whatsapp.length < 10){
//     //         seterror("whatsapp", "*Whatsapp number should be 10 digits!");
//    //         returnval = false;
//    //     }

//     let password = document.forms['myForm']['fpass'].value;
//     if(password.length < 6){
//         seterror("password", "*Password should be minimum 6 characters!");
//         returnval = false;
//     }
  
//     return returnval;
// }
