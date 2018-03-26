var url = "/";

primus = Primus.connect(url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

  document.querySelector(".coaster").addEventListener("click", function(e) {
    primus.write({ action: "coaster" });
    e.preventDefault();
    console.log("test");
});

primus.on("data", function(data) {
    //alert("data received");
    var title = document.querySelector(".title.live");

    if( title ) {
        //title.innerHTML = "koala clicked";
        var coaster = document.querySelector(".coaster.live");
        coaster.style.transform = "scale(1.5)";
    }
    
});