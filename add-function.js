function calc(){
var inputs = document.getElementsByClassName('qty');
  resultEl = document.getElementById('total'),
  sum = 0;            
 
  for(var i=0; i<inputs.length; i++) {
    var ip = inputs[i];
 
    if (ip.name && ip.name.indexOf("total") < 0) {
      sum += parseInt(ip.value) || 0;
    }
 
  }
 
  resultEl.value = sum;
}
 
document.addEventListener("DOMContentLoaded", function(event) { 
  document.getElementById("sumcalc").addEventListener("click", function(e){
e.preventDefault();
    calc();
  });
});