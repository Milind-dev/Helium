//Event Listeners

//nav bar profile section
document.getElementById("nav__bar__actions__dropdown__button").addEventListener("click", () => {
    document.getElementById("nav__bar__actions__dropdown__button__list").classList.toggle("nav__bar__actions__dropdown__button__list__show");
});


// create project section
document.getElementById("dropDown__buttons__active").addEventListener("click", () => {
    document.getElementById("dropDown__buttons__active__projects").classList.toggle("dropDown__buttons__dropDown__show");
});

document.getElementById("dropDown__buttons__client__filterButton").addEventListener("click", () => {
    document.getElementById("dropDown__buttons__client__search").classList.toggle("dropDown__buttons__dropDown__show")
});


//Create project form
// document.querySelector(".project__form form").addEventListener("click", (e) => {
//     e.preventDefault();
// })

let projectFormClientList = document.getElementById("project__form__client__list")
let projectFormClientInput = document.getElementById("project__form__client__input")

document.getElementById("project__form__client__list__button").addEventListener("click", () => {
    projectFormClientList.style.display = "none";
    projectFormClientInput.style.display = "block";
});

document.getElementById("project__form__client__input__button").addEventListener("click", () => {
    projectFormClientList.style.display = "block";
    projectFormClientInput.style.display = "none";
});


//Create project type
let timeButton = document.getElementById("form__projectTypes__time__button");
let timeDropDown = document.getElementById("form__projectTypes__time__dropDown");

let feeButton = document.getElementById("form__projectTypes__fee__button");
let feeDropDown = document.getElementById("form__projectTypes__fee__dropDown");

let billableButton = document.getElementById("form__projectTypes__non-billable__button");
let billableDropDown = document.getElementById("form__projectTypes__non-billable__dropDown");


timeButton.addEventListener("click", () => {
    timeDropDown.style.display = "block";
    billableDropDown.style.display = "none";
    feeDropDown.style.display = "none";

    timeButton.classList.add("form__button__style");
    billableButton.classList.remove("form__button__style");
    feeButton.classList.remove("form__button__style");
});


feeButton.addEventListener("click", () => {
    feeDropDown.style.display = "block";
    billableDropDown.style.display = "none";
    timeDropDown.style.display = "none";

    feeButton.classList.add("form__button__style");
    billableButton.classList.remove("form__button__style");
    timeButton.classList.remove("form__button__style");
});


billableButton.addEventListener("click", () => {
    billableDropDown.style.display = "block";
    feeDropDown.style.display = "none";
    timeDropDown.style.display = "none";

    billableButton.classList.add("form__button__style");
    feeButton.classList.remove("form__button__style");
    timeButton.classList.remove("form__button__style");
});


//create new project button

let newProjectButton1 = document.getElementById("createProject__button__1");
let newProjectButton2 = document.getElementById("createProject__button__2");
let dropDownButtonsSection = document.getElementById("dropDown__buttons");
let createProjectSection = document.getElementById("createProject");
let projectForm = document.getElementById("project__form");



//functions
const createNewProject = () => {
    dropDownButtonsSection.style.display = "none";
    createProjectSection.style.display = "none";
    projectForm.style.display = "block";
}



//Event Listener
newProjectButton1.addEventListener("click", createNewProject);
newProjectButton2.addEventListener("click", createNewProject);



//Task section

let taskSuggestions = document.getElementById("form__tasks__suggestions");
let taskInput = document.getElementById("addTask");
let formTasksItem = document.getElementById("form__tasks__item");
let saveProject = document.getElementById("project__form__action__save");
let cancelProject = document.getElementById("project__form__action__cancel");

let oldClientName = document.getElementById("project__form__client__list__options");
let newClientName = document.getElementById("client__input");
let newProjectName = document.getElementById("projectName");
let newProjectCode = document.getElementById("projectCode");
let newProjectStartDate = document.getElementById("dateFrom");
let newProjectEndDate = document.getElementById("dateTo");
let newProjectNotes = document.getElementById("notes");
let newProjectType = document.getElementById("billBudget");
let newProjectPermissions = document.getElementsByName("report");
let newProjectTasks = document.getElementsByClassName("form__tasks__item__child__task__value");
let newProjectTeam = document.querySelector(".form__team__item__user p");


//functions

//show task function
const showTask = () => {

    taskObject = JSON.parse(localStorage.getItem("addTask"));
    if (localStorage.getItem("addTask") && taskObject.length == 0) {
        formTasksItem.innerText = "There are no tasks on this project. What should we work on?";
        formTasksItem.style.borderBottom = "1px solid #999";
    } else if (localStorage.getItem("addTask")) {

        formTasksItem.style.borderBottom = "none";


        let html = "";
        taskObject.forEach((item, index) => {
            html += `<div class="form__tasks__item__child" id="${index}">
                        <div class="form__tasks__item__child__task">
                            <i class="fa fa-times form__tasks__item__child__task__delete" id="fa-times" onclick="deleteTask(${index})" aria-hidden="true"></i>
                            <p class="form__tasks__item__child__task__value">${item.task}</p>
                        </div>
                        <div class="form__tasks__item__child__checkbox">
                            <input type="checkbox" name="check" id="checkbox">
                        </div>
                    </div>`
        });

        formTasksItem.innerHTML = html;
    }
}

showTask();


//adding task
const addTask = (e) => {
    // console.log(e.target.innerText);
    if (localStorage.getItem("addTask")) {
        // console.log("there")
        taskObject = JSON.parse(localStorage.getItem("addTask"));
    } else {
        // console.log("1")
        taskObject = [];
    }

    let taskDetails = e.target.innerText;
    taskObject.push({
        "task": taskDetails
    });
    // console.log(taskObject)
    localStorage.setItem("addTask", JSON.stringify(taskObject));
    showTask();

    taskSuggestions.removeChild(e.target);
}


//Delete task
const deleteTask = (e) => {
    // console.log("hello")
    // console.log(e)
    if (localStorage.getItem("addTask")) {
        // console.log("there")
        taskObject = JSON.parse(localStorage.getItem("addTask"));
    }

    let form__tasks__suggestions__item = document.createElement("div");
    form__tasks__suggestions__item.setAttribute("class", "form__tasks__suggestions__item");
    form__tasks__suggestions__item.innerText = taskObject[e].task;

    // console.log(taskObject[e].task)
    taskSuggestions.appendChild(form__tasks__suggestions__item);

    taskObject.splice(e, 1);
    localStorage.setItem("addTask", JSON.stringify(taskObject));
    // console.log(taskObject);
    showTask();


}


const cancelProjectDetails = () => {
    dropDownButtonsSection.style.display = "flex";
    createProjectSection.style.display = "flex";
    projectForm.style.display = "none";
}


//save function
const saveProjectDetails = () => {
    let clientName = "";
    let projectName = newProjectName.value;
    let projectCode = newProjectCode.value;
    let projectStartDate = newProjectStartDate.value;
    let projectEndDate = newProjectEndDate.value;
    let projectNotes = newProjectNotes.value;
    let projectType = newProjectType.options[newProjectType.selectedIndex].text;
    let projectPermission = "";
    let projectTasks = [];
    let projectTeam = newProjectTeam.textContent;


    if (projectFormClientList.style.display == "block") {
        clientName = oldClientName.options[oldClientName.selectedIndex].value;
    } else {
        clientName = newClientName.value;
    }


    newProjectPermissions.forEach(item => {
        if (item.checked) {
            // console.log(item.value);
            projectPermission = item.value;
        }
    });


    for (let i = 0; i < newProjectTasks.length; i++) {
        // console.log(newProjectTasks[i].innerText)
        projectTasks.push(newProjectTasks[i].innerText);
    }

    let newProjectObject = {
        "clientName": clientName,
        "projectName": projectName,
        "projectCode": projectCode,
        "projectStartDate": projectStartDate,
        "projectEndDate": projectEndDate,
        "projectNotes": projectNotes,
        "projectType": projectType,
        "projectPermission": projectPermission,
        "projectTasks": projectTasks,
        "projectTeam": projectTeam
    }

    // console.log(newProjectObject);

    if (localStorage.getItem("newProjectList")) {
        projectStoredList = JSON.parse(localStorage.getItem("newProjectList"));
    } else {
        projectStoredList = [];
    }

    projectStoredList.push(newProjectObject);

    localStorage.setItem("newProjectList", JSON.stringify(projectStoredList))
    console.log(projectStoredList)
}


//Event listeners
document.getElementById("addTask").addEventListener("click", () => {
    document.getElementById("form__tasks__suggestions").classList.toggle("task__suggestions");
});

taskSuggestions.addEventListener("click", addTask);

saveProject.addEventListener("click", saveProjectDetails);

cancelProject.addEventListener("click", cancelProjectDetails);