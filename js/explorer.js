function myFunction1() {
      var input = document.getElementById("AdressInput").value;
      var isAddress = /^[0-9a-zA-Z]{34}$/.test(input);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var myObj = this.responseText;
      var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
      document.getElementById("adress").innerHTML = jsonPretty;
      }
      };
      xmlhttp.open("GET", "https://bitcoin.mubiz.com/address/" + input + "/", true);
      xmlhttp.send();
    }

function myFunction2(){
      var input = document.getElementById("TranInput").value;
      var isAddress = /^[0-9a-zA-Z]{34}$/.test(input);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var myObj = this.responseText;
      var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
      document.getElementById("adress").innerHTML = jsonPretty;
      }
      };
  xmlhttp.open("GET", "https://bitcoin.mubiz.com/transaction/" + input + "/", true);
  xmlhttp.send();
}

function myFunction3(){
      var input = document.getElementById("BlockInput").value;
      var isAddress = /^[0-9a-zA-Z]{34}$/.test(input);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var myObj = this.responseText;
      var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
      document.getElementById("adress").innerHTML = jsonPretty;
      }
      };
  xmlhttp.open("GET", "https://bitcoin.mubiz.com/block_input/" + input + "/", true);
  xmlhttp.send();
}

function myFunction4(){
      var input = document.getElementById("IndexInput").value;
      var isAddress = /^[0-9a-zA-Z]{34}$/.test(input);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var myObj = this.responseText;
      var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
      document.getElementById("adress").innerHTML = jsonPretty;
      }
      };
  xmlhttp.open("GET", "https://bitcoin.mubiz.com/block_index/" + input + "/", true);
  xmlhttp.send();
}
