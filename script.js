// let total = document.getElementsByClassName("student")[0];

// let newadd = document.getElementById("addnew")[0];
// newadd.addEventListener("click",function (){
//     let information = document.createElement("table");

    
// })
function showtotalemployees(){

        
        let totalEmployee = document.querySelector("#shownum");
        
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        
        totalEmployee.innerText = employees.length;
}
showtotalemployees();

let newemployee = document.querySelector("#addnew");
newemployee.addEventListener("click", () => {
        window.location.href="add-employe.html";



});
