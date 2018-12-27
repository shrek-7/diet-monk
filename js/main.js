$(document).ready(function(){
    var whichLogin;
    var loginSuccess;
    var usersList =
    {
        "sughosh":"rjsughosh123",
        "dhanush":"confused_jeeva",
        "ankita":"ankudbanku"
    };

    $('#login-modal-close').click(function(){
        $("#login-modal").removeClass("show");
        $("#login-modal").addClass("hide");
    });

    $("#login-navbar").click(function(){
        $("#login-modal").removeClass("hide");
        $("#login-modal").addClass("show");
    });

    $("#user-login").click(function(){
        whichLogin = "user-login";
        $("#user-login").addClass("grey-background");
        $("#admin-login").removeClass("grey-background"); 
        $("#coming-soon").removeClass("hide");
        $("#coming-soon").addClass("show");      
    });

    $("#admin-login").click(function(){
        whichLogin = "admin-login";
        $("#admin-login").addClass("grey-background");
        $("#user-login").removeClass("grey-background"); 
        $("#coming-soon").removeClass("show");  
        $("#coming-soon").addClass("hide");
    });

    $("#login-submit").click(function(){
        var username = $('#username').val();
        var password = $('#password').val();

        if(usersList[username] == password){
            loginSuccess = true;
            localStorage.setItem("currentUser", username);
            window.location.replace("../customchart.html");
        }
        else{
            loginSuccess = false;
            alert("Invalid Username or Password! Please try again");
        }

    });
    $('#greetings').text(localStorage.getItem('currentUser'));

    $("#back-icon").click(function(){
        window.location.replace("../index.html");

    })

});