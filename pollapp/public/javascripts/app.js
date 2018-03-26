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
    percent("a");
    e.preventDefault();
});

document.querySelector(".klik2").addEventListener("click", function(e) {
    primus.write({ click: "Clicked" });
    percent("b");
    e.preventDefault();
});

function percent(optie){
    
    var per1 = document.getElementById("op1");
    var val1 = parseInt(per1.innerHTML);

    var per2 = document.getElementById("op2");
    var val2 = parseInt(per2.innerHTML);

    var votes = document.querySelector(".votes");
    var total = parseInt(votes.innerHTML);

    // Omzetten naar kliks
    var g1 = (val1/100) * total;
    var g2 = (val2/100) * total;

    // Welke is geklikt
    if(optie == "a" ){
        g1 = g1+1;
        
    } else if(optie == "b" ) {
        g2 = g2+1;
    }

    total = total +1;
    votes.innerHTML = total;

    var num1 = (g1/total) *100;
    var num2 = (g2/total) *100;

    per1.innerHTML = Math.round(num1).toFixed(0);
    per2.innerHTML = Math.round(num2).toFixed(0);

}

primus.on("data", function message(data) {
    
    //alert("data received");
    var title = document.querySelector(".title");
    
    
    if( title ) {
        
        //title.innerHTML = "Yep";
    }
    
});