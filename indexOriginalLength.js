
   var button = document.getElementById("enter");
   var input = document.getElementById("userinput");
   var ul = document.querySelector("ul");
   
   //.................. a way to make it shorter the code
   
   button.addEventListener("click", function(){
       if (input.value.length > 0) {
           var li = document.createElement("li");
           li.appendChild(document.createTextNode(input.value));
           ul.appendChild(li);
           input.value = "";
       }
   
      });
   
      input.addEventListener("keydown", function(event){
       if (input.value.length > 0 && event.keyCode === 13) {
           var li = document.createElement("li");
           li.appendChild(document.createTextNode(input.value));
           ul.appendChild(li);
           input.value = "";
       }
   
      });

