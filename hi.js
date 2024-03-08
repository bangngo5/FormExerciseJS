function getform() {
    let test = 0;
    for(let i = 0; i < 3; i++){
        if(document.getElementById("name").value == "" && document.getElementById("name-error").innerHTML == "")
        {
            document.getElementById("name-error").innerHTML = '<p>Please enter your name</p>';
            document.getElementById("name-error").style.color = "Red";
            document.getElementById("name").style.borderColor = "Red";
        }
        else if(document.getElementById("email").value == "" && document.getElementById("email-error").innerHTML == "")
        {
            document.getElementById("email-error").innerHTML = '<p>Please enter your email</p>';
            document.getElementById("email-error").style.color = "Red";
            document.getElementById("email").style.borderColor = "Red";
        }
        else if (document.getElementById("password").value == "" && document.getElementById("pass-error").innerHTML == "") 
        {
            document.getElementById("pass-error").innerHTML = '<p>Please enter your passowrd</p>';
            document.getElementById("pass-error").style.color = "Red";
            document.getElementById("password").style.borderColor = "Red";
        }
        
        else if(document.getElementById("email").value != "" && test < 1)
        {
            document.getElementById("email-error").innerHTML = '';
            document.getElementById("email").style.borderColor = "Green"
            test = 1;
        }
        else if(document.getElementById("name").value != "" && test < 2)
        {
            document.getElementById("name-error").innerHTML = '';
            document.getElementById("name").style.borderColor = "Green"
            test = 2
        }
        else if (document.getElementById("password").value != "" && test < 3) 
        {
            document.getElementById("pass-error").innerHTML = '';
            document.getElementById("password").style.borderColor = "Green"
        }
    }
    test = 0
}