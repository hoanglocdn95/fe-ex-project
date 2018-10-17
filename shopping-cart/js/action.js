$(document).ready(function(){
	// load featured product
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var b = JSON.parse(this.responseText);
			console.log(b);
			for (var i in b) {
				document.getElementById("shop-content-display").innerHTML += 
				'<div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">'+
				'<div class="shop-content-item">'+
				'<img id="img-'+i+'"src="'+b[i].src+'" alt="'+b[i].name+
				'" class="w-100 d-block">'+
				'<a href="detail.html?id='+b[i].id+'" title="'+b[i].id+'">'+b[i].name+'</a>'+
				'<p id="price-'+i+'">$'+b[i].price+'</p>'+
				'</div>'+
				'</div>';
			}
		}
	};
	xmlhttp.open("GET", "http://localhost:3000/product", true);
	xmlhttp.send();

  //code of tuan'
  function getQueryVariable(variable)
  {
  	var query = window.location.search.substring(1);
  	var vars = query.split('&');
  	for (var i=0;i<vars.length;i++) {
  		var pair = vars[i].split('=');

  		if(pair[0] == variable){return pair[1];}
  	}
  	return(false);
  }
  var idValue = getQueryVariable('id');

  var xmlhttp2 = new XMLHttpRequest();
  xmlhttp2.onreadystatechange = function() {
  	if (this.readyState == 4 && this.status == 200) {
  		var a = JSON.parse(this.responseText);
  		console.log(a);
  		for (var k in a){
  			if (a[k].id == idValue){
  				document.getElementById("detail-right-top-name").innerHTML=a[k].name;
  				document.getElementById("detail-right-top-price").innerHTML=a[k].price;
  			}
  		}
  	}
  };
  xmlhttp2.open("GET", "http://localhost:3000/product/", true);
  xmlhttp2.send();

  //detail page button quantity
  function numberCart(){
  	if (localStorage.nameProduct == null || localStorage.nameProduct == "undefined") {
  		document.getElementById("cart-quantity").innerHTML = "<big>0</big>";
  	} else {
  		var arr = localStorage.nameProduct.split(",");
  		document.getElementById("cart-quantity").innerHTML = "<big>"+arr.length+"</big>";
  	}
  }
  setInterval(numberCart, 100);

  // function loadInCart(){
  //   document.getElementById("cart-product-tag-load").innerHTML ="";

  //   if (localStorage.nameProduct == null || localStorage.nameProduct == undefined) {
  //     localStorage.removeItem("nameProduct");
  //     localStorage.removeItem("quantityProduct");
  //     localStorage.removeItem("priceProduct");
  //     document.getElementById("cart-product-tag-load").innerHTML = 
  //         '<div class="container-fluid">'+
  //               '<div class="row">'+
  //               '<center><h2>EMPTY</h2></center>'+
  //               '</div>'+
  //         '</div>';

  //   } else {
  //     var arr1 = localStorage.nameProduct.split(",");
  //     var arr2 = localStorage.quantityProduct.split(",");
  //     var arr3 = localStorage.priceProduct.split(",");

  //     for (var i = 0; i < arr1.length; i++) {
  //       document.getElementById("cart-product-tag-load").innerHTML +=
  //             '<div class="container-fluid">'+
  //               '<div class="row">'+
  //                 '<div class="col-3">'+
  //                   '<img class="w-75 d-block" src="images/item-01.jpg" alt="hinh">'+
  //                 '</div>'+
  //                 '<div class="col-3">'+
  //                   '<p>'+arr1[i]+'</p>'+
  //                 '</div>'+
  //                 '<div class="col-1">'+
  //                   '<p>'+arr3[i]+'</p>'+
  //                 '</div>'+
  //                 '<div class="col-3">'+
  //                   '<div class="btn-group" role="group" aria-label="Basic example">'+
  //                       '<button type="button" class="btn btn-secondary"><i class="fa fa-minus" style="font-size: 18px"></i></button>'+
  //                       '<input name="quantity" value="'+arr2[i]+'">'+
  //                       '<button type="button" class="btn btn-secondary"><i class="fa fa-plus" style="font-size: 18px"></i></button>'+
  //                   '</div>'+
  //                 '</div>'+
  //                 '<div class="col-2 cart-product-total" >'+
  //                   '<p>10000</p>'+
  //                   '<button name="'+i+'" onclick="deleteProduct()" style="font-size:24px">DELETE <i class="material-icons">delete_forever</i></button>'+
  //                 '</div>'+
  //               '</div>'+
  //             '</div>';
  //     }   
  //   }
  // }

});