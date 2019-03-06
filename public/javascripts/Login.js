$( "#login" ).click(function() {

      var un = $( "#Username" ).val();
      var pw = $( "#Password" ).val();
      document.getElementById("Error").innerHTML = '';


      $.post( "/login", { Username: un, Password: pw })
      .done(function( data ) {
      console.log(data);

      if(data.UNull == true && data.PNull == true){
        document.getElementById("Error").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top:10px;">Username & password is empty</div>';
      }
      else if (data.PNull == true) {
        document.getElementById("Error").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top:10px;">Password is empty</div>';
      }
      else if (data.UNull == true) {
        document.getElementById("Error").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top:10px;">Username is empty</div>';
      }
      else if (data.ULength == true) {
        document.getElementById("Error").innerHTML += '<div class="alert alert-danger" role="alert" style="margin-top:10px;">Username is to long!</div>';
      }
      else if (data.PLength == true) {
        document.getElementById("Error").innerHTML += '<div class="alert alert-danger" role="alert" style="margin-top:10px;">Password is to long!</div>';
      }else{
      if(data.Logged == false){
        document.getElementById("Error").innerHTML = '<div class="alert alert-danger" role="alert" style="margin-top:10px;">Login Failed</div>';
      }
      if(data.Logged == true){
      window.location.replace("/" + data.Access );
      }
      }
    });
});
