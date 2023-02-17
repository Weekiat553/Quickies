$(document).ready(function () {
    const APIKEY = "63e208533bc6b255ed0c474d";
    getContacts();
  
    $("#start").on("click", function (e) {
      e.preventDefault();
      console.log('hello');
      
      
      let email = $("#email").val();
      let password = $("#password").val();
      let username = $("#username").val();
  
      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "email": email,
        "password": password,
        "username": username
      };
  
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://quickies-168a.restdb.io/rest/register",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
      }
      $.ajax(settings).done(function (response) {
        console.log(response);

        $("#start").prop( "disabled", false);
        getContacts();
        window.location.assign('loading.html');
    }); 

});

function getContacts(limit = 10, all = true) {

  }
})



