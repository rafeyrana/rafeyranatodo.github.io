const form = document.forms["myForm"];
const input = form["task"];
const ul = document.getElementById("task_list");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = input.value;
  if (val!="")
  {
    const new_li = document.createElement("li");
  new_li.innerHTML =
    val + 
    '<i  onClick="delFunction(this)" class="fa-solid fa-trash" style="float:right ;"></i>' ;
  ul.appendChild(new_li);
  }
  
});

function delFunction(e) {
  e.parentElement.remove();
}
function deleteAll()
{
    ul.innerHTML="";
}
