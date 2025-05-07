function add(){
    var input=document.getElementById("insert").value.trim();
    if(input===""){
        alert("Enter task")
    }
    var li=document.createElement("li")
    li.innerHTML="<span>"+input+"</span><button onclick='deletelist(event)'>Delete</button>"
    document.getElementById("unordered-list").appendChild(li)
    document.getElementById("insert").value=""
}
    

function deletelist(event){
    event.target.parentElement.remove();
    

}