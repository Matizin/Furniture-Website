window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  function startLoader() {
    const loader = document.getElementsByClassName("loader")[0];
    console.log(loader);
  
    setTimeout(function() {
      loader.style.right = "0";
    }, 1000);
  
    
      setTimeout(function() {
        loader.style.left = "100%";
        document.body.classList.remove("loading");
        document.getElementsByClassName("loader")[0].style.display = "none";
      }, 1500);
      console.log("its done");

  }
startLoader();
});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
