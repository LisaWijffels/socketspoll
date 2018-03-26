var url = "/";

primus = Primus.connect(url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

document.querySelector(".klik1").addEventListener("click", function(e) {
    primus.write({ click: "Clicked" });
    var per1 = document.getElementById("op1");
    var val1 = parseInt(per1.innerHTML);
    val1 = val1+1;
    per1.innerHTML = val1;
    e.preventDefault();
});

document.querySelector(".klik2").addEventListener("click", function(e) {
    primus.write({ click: "Clicked" });
    var per2 = document.getElementById("op2");
    var val2 = parseInt(per2.innerHTML);
    val2 = val2+1;
    per2.innerHTML = val2;
    e.preventDefault();
});

primus.on("data", function message(data) {
    
    //alert("data received");
    var title = document.querySelector(".title");
    
    
    if( title ) {
        
        //title.innerHTML = "Yep";
    }
    
});