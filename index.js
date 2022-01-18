function todo(){
    const todo = document.getElementById("myInput");
    const myUL= document.getElementById("myUL");
    const newelement = document.createElement("li");
    newelement.innerHTML=todo.value;
    if(todo.value==""){
        alert("Enter your inpute");
    }
    else{
        myUL.append(newelement);    //----->first postion
        todo.value="";
    }
   // myUL.appendChild(newelement); 
   const delet= document.createElement("button");
   delet.innerHTML="Remove Item";
   myUL.prepend(delet);
   delet.addEventListener("click",deletebutton);
   
  
}

function deletebutton(){
    
    const line = document.getElementsByTagName("li");
   for(let i=0;i<line.length;i++){
       const item=line[i];
       const check = item.getElementsByTagName("button");
       if(check==true){
           
        check.addEventListener("click", function removebutton(){
            
            item.remove();
            alert("Item Deleted");
        });

       }
       else{
           const delet = document.createElement("button");
           const already= document.getElementsByTagName("button");
           //already.remove();
        delet.innerHTML="X";
        delet.style.color="red";
        item.prepend(delet);
        delet.addEventListener("click", function removebutton(){
            
            item.remove();
            alert("Item Deleted");
        });
       }
        

  }
   


 }
function deleteAll(){
    const line = document.getElementsByTagName("ul");
    const deletebutton= document.createElement("button");
    deletebutton.innerHTML="Remove All";
    const buttonplace= document.getElementById("myDIV");
    deletebutton.style.marginLeft="50%";
    deletebutton.style.marginRight="50%";
    deletebutton.style.marginTop="10px";
    buttonplace.append(deletebutton);
    deletebutton.addEventListener("onclick",()=>{
        line.remove();
    });
}
deleteAll();
