// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const $ = (id) => document.getElementById(id);
let form = $('addForm');
let table = $('employees');
let empCount = $('empCount');
// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value;
    let name = $('name').value;
    let extension = $('extension').value;
    let email = $('email').value;
    let department = $('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let idCell = row.insertCell();
    let nameCell = row.insertCell();
    let extensionCell = row.insertCell();
    let emailCell = row.insertCell();
    let departmentCell = row.insertCell();
    let deleteBtnCell = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textID =        document.createTextNode(id);
    let textName =      document.createTextNode(name);
    let textExtension = document.createTextNode(extension);
    let textEmail =     document.createTextNode(email);
    let textDepartment =document.createTextNode(department);
   
    idCell.appendChild(textID);
    nameCell.appendChild(textName);
    extensionCell.appendChild(textExtension); 
    emailCell.appendChild(textEmail);
    departmentCell.appendChild(textDepartment);

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    let textDelete = document.createTextNode('X');
    deleteBtn.appendChild(textDelete);
    deleteBtn.className = 'btn bg-danger text-white';
    deleteBtnCell.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    form.id.focus();
    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.innerHTML = `(${count})`;
})

// DELETE EMPLOYEE
table.addEventListener('click', (e) => {
    if(confirm('Are you sure you want to delete employee?')) {
        if(e.target.classList.contains('btn')){
            table.deleteRow(e.target.parentElement.parentElement.rowIndex);
            // const btn = e.target;
            // btn.closest('tr').remove();
            count--;
            countEmp.innerHTML = count;
        }   
    }
    })
