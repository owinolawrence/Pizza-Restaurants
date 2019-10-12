//  size Selection
  function Size(){
    var Size=document.getElementById("size").value;
     return parseInt (Size);
  }
//   crust Selection
  function Crust(){
    var Crust=document.getElementById("crust").value;
    return parseInt (Crust);
    
  }
//   Number of pizza 
  function getNumber(){
    var getNumber=document.getElementById("getnumber").value;
    return parseInt (getNumber);
  }
  
//   toppings selection
  function getSpinach(){
    var Spinach = 0;
    var spinach = document.getElementById("spinach");
       if (spinach.checked === true) {
        Spinach = 200;
        
    }
    return parseInt (Spinach);
  }
  
  function getPepper(){
    var Pepper = 0;
    var pepper = document.getElementById("pepper");
       if (pepper.checked === true) {
        Pepper = 200;
        
    }
    return parseInt (Pepper);
  }
  
  function getBacon(){
    var Bacon = 0;
    var bacon = document.getElementById("bacon");
       if (bacon.checked === true) {
        Bacon = 200;
        
    }
    return parseInt (Bacon);
  }
  
  function getSausage(){
    var Sausage = 0;
    var sausage = document.getElementById("sausage");
       if (sausage.checked === true) {
        Sausage = 200;
        
    }
    return parseInt (Sausage);
  }
//   order calculation
  function calculate(event) {
    var calculate = (Size() + Crust()  + getSpinach() + getPepper()+ getBacon() +getSausage()) * getNumber() ;
    document.getElementById("showleft").innerHTML = "Hello ,your order is " + '' + getNumber() + '' +  '' + "pizza" +" cost  is ksh. " + (calculate);
    event.preventDefault();}

  