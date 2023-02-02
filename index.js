$(document).ready(function() {
    //what kind of interface we want at the start 
    const APIKEY = "63d9e16d3bc6b255ed0c4502";

    //[STEP 1]: Create our submit form listener
    $("#user-submit").on("click", function(e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: let's retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
      let userEmail = $("#eMail").val();
      let userPassword = $("#paSsword").val();
      let userName = $("#uSername").val();
  
      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "email": userEmail,
        "password": userPassword,
        "username": userName
      };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://quickies-beb5.restdb.io/rest/userregistration",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function() {
          //@TODO use loading bar instead
          //disable our button or show loading bar
          $("#user-submit").prop("disabled", true);
          //clear our form using the form id and triggering it's reset feature
        }
      }
  
    }); //end click

      //[STEP] 6
  //let's create a function to allow you to retrieve all the information in your contacts
  //by default we only retrieve 10 results
  function getUser(limit = 10, all = true) {

  }
})