document.getElementById("eform").addEventListener("submit",function(event){
  var email=document.getElementById("email").value
  var name=document.getElementById("names").value
  var num=document.getElementById("number").value
  var phn=/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
  var reg=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!reg.test(email)){
    alert("invalid email");
    event.preventDefault();



  }
  if(name=""){
    alert("Enter a Valid Nmae")
  }
   
  if(!phn.test(num)){
    alert("Enter a valid phone number")
    event.preventDefault();
  }
  
  
  else{
    alert("our executive will contact you")
  }
})








