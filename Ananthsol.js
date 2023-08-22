function btnlogin()
{
    var lgn=document.getElementById("username").value;
   alert(`username:${lgn}`);

   var pass=document.getElementById("password").value;
    alert("password:" + pass);

}
function GotoPage()
{
    let win=window.open("http://127.0.0.1:5500/htmls/Employee.html","target=_parent,width=100px,height=50px");
}
function btnCancel()
{
    var can=document.getElementById("Cel").value;
alert(`reset:${can}`);
}
