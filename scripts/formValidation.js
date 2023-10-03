document.getElementById("formContact").onsubmit = function(){
    let name = document.forms["formContact"]["name"].value;
    let email = document.forms["formContact"]["email"].value;
    let emailRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    let phone = document.forms["formContact"]["phone"].value;
    let message = document.forms["formContact"]["message"].value;
    let validate = true;

    //validation name
    if (name === null || name === ""){
      document.getElementById("errorName").style.display = "flex";
      validate = false;
    }else{
      document.getElementById("errorName").style.display = "none";
    }

    //validation e-mail
    if (email === null || email === ""){
      document.getElementById("errorEmail").style.display = "flex";
      document.getElementById("error-regEx").style.display = "none"
      validate = false;
    }else{
      if (emailRegex.test(email) === false) {
        document.getElementById("errorEmail").style.display = "flex";
        document.getElementById("error-empty").style.display = "none";
        document.getElementById("error-regEx").style.display = "block"
        validate = false;
      }else{
        document.getElementById("errorEmail").style.display = "none";
      }
    }

    //validation phone
    if (phone === null || phone === ""){
      document.getElementById("errorPhone").style.display = "flex";
      validate = false;
    }else{
      document.getElementById("errorPhone").style.display = "none";
    }

    //validation message
    if (message === null || message === ""){
      document.getElementById("errorMessage").style.display = "flex";
      validate = false;
    }else{
      document.getElementById("errorMessage").style.display = "none";
    }

    if (validate === true){
      alert("The message was sent")
    }
    return validate;
}