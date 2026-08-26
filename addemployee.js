let name = document.querySelector("#name");
let department = document.querySelector("#department");
let employeeno = document.querySelector("#employeeno");
// let employeeid = document.querySelector("#empid");
let position = document.querySelector("#position");
let salary = document.querySelector("#salary");
// let empid = 1;

let tabledata = document.querySelector("tbody");
let submit = document.querySelector("#submit");

let employees = JSON.parse(localStorage.getItem("employees")) || [];

// let employeeCount = "";
let employeeCount = employees.length + 1;

function generateEmployeeId() {
    return `EMP${String(employeeCount++).padStart(4, '0')}`;
}

function showEmployee(employee,index) {

    let tr = document.createElement("tr");

    let ntd = document.createElement("td");
    let dtd = document.createElement("td");
    let enutd = document.createElement("td");
    let eitd = document.createElement("td");
    let postd = document.createElement("td");
    let saltd = document.createElement("td");

    // enutd=1;
    // enutd++;

    ntd.innerText = employee.name;
    dtd.innerText = employee.department;
    enutd.innerText = employee.employeeno;
    eitd.innerText = employee.employeeid;
    postd.innerText = employee.position;
    saltd.innerText = employee.salary;


    let deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";
    deletebtn.classList.add("btn", "btn-danger", "btn-sm","deletebtnn");
    deletebtn.style.width="100%";

//     deletebtn.addEventListener("mouseenter", () => {
//     deletebtn.style.backgroundColor = "red";
// });
    
    deletebtn.addEventListener("click", function () {
        
        employees.splice(index, 1);
        
       
        localStorage.setItem(
            "employees",
            JSON.stringify(employees)
        );
    
        tr.remove();
    });

    tr.appendChild(ntd);
    tr.appendChild(dtd);
    tr.appendChild(enutd);
    tr.appendChild(eitd);
    tr.appendChild(postd);
    tr.appendChild(saltd);
tr.appendChild(deletebtn);

tabledata.appendChild(tr);
}

submit.addEventListener("click", function () {

     let inputvaluearr=[

         name.value === "" ,
        //  employeeid.value === "" ,
         position.value === "" ,
         salary.value === ""
        ] 
   if (inputvaluearr.includes(true)) {
    error.innerText = "Please fill all employee details";
    error.style.color = "red";
    return;
}
   

    //  if (
    //     name.value === "" ||
    //     employeeid.value === "" ||
    //     position.value === "" ||
    //     salary.value === ""
    // ) {
    //     error.innerText = "Please fill all employee details";
    //     error.style.color = "red";
    //     return;
    // }
    
    let employee = {
        name: name.value,
        department: department.value,
        employeeno: employeeno.value,
     employeeid: generateEmployeeId(),
        position: position.value,
        salary: salary.value
    };
    
    employees.push(employee);
    
    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );
    
    // New employee table me show
    showEmployee(employee);
    
    name.value = "";
    department.value = "";
    employeeno.value = "";
    employeeid.value = "";
    position.value = "";
    salary.value = "";
    
});
// let employeeCount = "";
// let empid=1;
// let employees = JSON.parse(localStorage.getItem("employees")) || [];

// let employeeCount = employees.length + 1;

// function generateEmployeeId() {
//     return `EMP${String(employeeCount++).padStart(4, '0')}`;
// }




// console.log(generateEmployeeId());
// console.log(generateEmployeeId());
// console.log(generateEmployeeId());



employees.forEach(function(employee, index) {
    showEmployee(employee, index);
});
