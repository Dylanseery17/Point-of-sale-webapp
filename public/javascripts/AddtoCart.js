function addToCart(id) {
        //Gets values from product generated in Get_Products
        var name = document.getElementById("OrderName "+id).innerHTML;
        var stock = document.getElementById("OrderStock "+id).innerHTML;
        var updateValue = document.getElementById("OrderInput " +id).value;
        //Gets only numbers
        var numbers = stock.match(/\d+/g).map(Number);
        var newStock = -updateValue - -numbers;
        var buttonData = id;

        //If stock
        if(newStock <= 0){
          document.getElementById('alert').innerHTML += '<div class="alert alert-danger" role="alert"><button type="button" id="dangerbtn" class="close" data-dismiss="alert"><span>&times;</span></button>You cant order more then stock value</div>';
        }else{
          document.getElementById('alert').innerHTML = '<div class="alert alert-success" role="alert"><button type="button" id="dangerbtn" class="close" data-dismiss="alert"><span>&times;</span></button>Added to cart</div>';

    //Adds to cart session
      $.ajax({url: "/AddtoCart/"+ id +"/"+ updateValue +"", success: function(result){
            console.log(result.length);
            document.getElementById('CartBar').innerHTML ='Cart ( '+ result.length +' )';
            var products = result;
        }});


}
}
