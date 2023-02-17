$(document).ready(function () {
    const APIKEY = "63e208533bc6b255ed0c474d";
    $("#end").on("click", function (e) { 
      e.preventDefault();
      getContacts();
    });
    
    function getContacts(limit = 10, all = true) {

        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://quickies-168a.restdb.io/rest/register",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        },
      }
      
      $.ajax(settings).done(function (response) {
  
        for (var i = 0; i < response.length && i < limit; i++) {

          let username = response[i].username
          let password = response[i].password
          let log_user = $("#loginuser").val();
          let log_pass = $("#logpass").val();

          if((username === log_user) && (password === log_pass)){
            window.location.assign('loading.html');
          } 
        }
      });
    }
  })