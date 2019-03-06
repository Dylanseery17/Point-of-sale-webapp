function loadlink(){
  $.ajax({
            type: "GET",
            dataType: 'json',
            url: "/Cart",
            success: function(response) {
              document.getElementById('CartTable').innerHTML ="";
              var orderTotal = 0;
              i=0;
                response.forEach(function(products) {
                  var id = products.id;
                  var img = products.img;
                  var name = products.Name;
                  var desc = products.desc;
                  var quanity = products.Quanity;
                  var stock = products.Stock;
                  var price = products.Price;
                  var subtotal = products.Subtotal;
                  i++;
                  orderTotal += +subtotal;
                  document.getElementById('Total').innerHTML = 'Total &euro;'+ orderTotal +'';

                  document.getElementById('CartTable').innerHTML += '<tr><td data-th="Product"><div class="row"><div class="col-sm-2 hidden-xs"><img src="images/Donuts/'+ img +'" alt="..." class="img-responsive"/></div><div class="col-sm-10"><h4 class="nomargin">' + name + '</h4><p>' + desc + '</p></div></div></td><td data-th="Price">&euro;' + price + '</td><td data-th="Quantity"><td data-th="Quanity">' + quanity + '</td>></td><td data-th="Subtotal" class="text-center">&euro;' + subtotal + '</td><td class="actions" data-th=""><button class="btn btn-danger btn-sm" style="color:white;" id="RemoveFromCart" onclick="myFunction('+i+')">X</button></td></tr>';

                  });
            }
    });



    $.ajax({url: "/Cart", success: function(result){
          document.getElementById('CartBar').innerHTML ='Cart ( '+ result.length +' )';
                document.getElementById('CartBar1').innerHTML ='Cart ( '+ result.length +' )';
      }});
}

loadlink(); // This will run on page load
setInterval(function(){
    loadlink() // this will run after every 2 seconds
}, 2000);
