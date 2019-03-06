    function myFunction(id) {

          var name = document.getElementById("ProductName "+id).innerHTML;
          var stock = document.getElementById("StockCount "+id).innerHTML;
          var updateValue = document.getElementById("Input " +id).value;
          var numbers = stock.match(/\d+/g).map(Number);
          var newStock = +updateValue + +numbers;
          var buttonData = id;


          console.log(buttonData);
          console.log(name);
          console.log(newStock);

        $.ajax({url: "/Products/Update/"+ id +"/"+ newStock +"", success: function(result){

          var newData = JSON.stringify(result);
          var json = JSON.parse(newData);
          console.log(newData);
          console.log(json);
          if(json.Equal == "Equal"){
              document.getElementById("Alerts "+id).innerHTML ='';
              document.getElementById("Alerts "+id).innerHTML = '<div class="alert alert-warning" role="alert">Stock must be added!</div>';
          }
          else if(json.Less == "Less"){
              document.getElementById("Alerts "+id).innerHTML ='';
              document.getElementById("Alerts "+id).innerHTML = '<div class="alert alert-danger" role="alert">Stock cannot be taken away!</div>';
          }
          else if(json.More == "More"){
              document.getElementById("Alerts "+id).innerHTML ='';
              document.getElementById("Alerts "+id).innerHTML = '<div class="alert alert-success" role="alert">Stock updated!</div>';
          }

        }});

    }
