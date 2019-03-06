function myFunction(id) {


    $.ajax({url: "/Cart/Remove/"+ id +"", success: function(result){
        document.getElementById("CartAlerts").innerHTML = '<div class="alert alert-success" role="alert">Updated Successfully</div>';
    }});

}
