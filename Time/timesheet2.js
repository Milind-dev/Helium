function Switch() {
    if (document.getElementById("day__page")) {

        if (document.getElementById("day__page").style.display == "none") {
            document.getElementById("day__page").style.display = "block";
            document.getElementById("week__page").style.display = "none";
        } else {
            document.getElementById("day__page").style.display = "none";
            document.getElementById("week__page").style.display = "block";
        }
    }
}

function Monday() {
    document.getElementById("change__monday").innerHTML = "Monday, 28 Dec"
    document.getElementById("hide__text").style.display = "none"
}

function Tuesday() {
    document.getElementById("change__monday").innerHTML = "Tuesday, 29 Dec"
    document.getElementById("hide__text").style.display = "none"
}

function Wednesday() {
    document.getElementById("change__monday").innerHTML = " Wednesday, 30 Dec"
    document.getElementById("hide__text").innerHTML = "none"
}

function Thursday() {
    document.getElementById("change__monday").innerHTML = "Thursday, 31 Dec"
    document.getElementById("hide__text").innerHTML = "none"
}

function Friday() {
    document.getElementById("change__monday").innerHTML = "Friday, 1 Jan"
    document.getElementById("hide__text").innerHTML = "none"
}

function Saturday() {
    document.getElementById("change__monday").innerHTML = "Today: Saturday, 2 Jan"
    document.getElementById("hide__text").innerHTML = "none"
}

function Sunday() {
    document.getElementById("change__monday").innerHTML = "Sunday, 3 Jan"
    document.getElementById("hide__text").innerHTML = "none"
}



// Popup Box

document.getElementById("timeTrackingActivating__button").addEventListener("click", popUp)

function popUp() {
    document.getElementById("popUp__container").style.display = "block"
    if (localStorage.getItem("newProjectList")) {
        let obj = JSON.parse(localStorage.getItem("newProjectList"))
        let html = ""
        let rolehtml = ""
        obj.forEach(item => {
            html += ` 

            <option class = "popup__option" value="${item.projectName}">${item.projectName}</option>`;
            item.projectTasks.forEach(task => {
                rolehtml += `
                <option class = "popup__option" value="${task}">${task}</option>`;
            })

        })

        document.getElementById("popup__contain__project").innerHTML = html

        document.getElementById("role__of__client").innerHTML = rolehtml
    }

}



// Popup display

document.getElementById("closeTimer__button").addEventListener("click", () => {
    document.getElementById("popUp__container").style.display = "none"
})

document.getElementById("startTimer__button").addEventListener("click", startTimer)


function startTimer() {

    let html = document.getElementById("timer__cardlist").innerHTML || ""

    let dropDownProjectName = document.getElementById("popup__contain__project")
    let dropDownProjectNameOption = dropDownProjectName.options[dropDownProjectName.selectedIndex].text

    let dropDownProjectTask = document.getElementById("role__of__client")
    let dropDownProjectTaskOption = dropDownProjectTask.options[dropDownProjectTask.selectedIndex].text

    console.log("dropDownProjectNameOption")

    html += ` <div class="timer__cardlistItem">
            <div class="timercard__listItem__left">
                <div >
                     <h5><a class="graph__link" target="_blank" href="../projects/project_graph.html">${dropDownProjectNameOption}</a></h5>
                </div><p>${dropDownProjectTaskOption}</p>
            </div>
            <div class="timercard__listItem__right">
                <h3 id = "showTimer"></h3>
                <button id = "statingTime" onClick = "startAgain(this)" ><img src="./dynamic_clock.gif" alt="running__clock"> Start</button>
                <button id = "timerStop"><i class="fa fa-clock-o" aria-hidden="true"></i> Stop</button>
                <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
            </div> 
        </div>`

    document.getElementById("timer__cardlist").innerHTML = html



    let seconds = 0;
    let minutes = 0;
    let timer = setInterval(() => {
        seconds++;
        if (seconds > 59) {
            minutes++;
            seconds = 1;
            localStorage.setItem("minutes", minutes);
        }
        if (seconds > 9) {
            document.getElementById("showTimer").innerText = `0${minutes}: ${seconds}`
        } else {
            document.getElementById("showTimer").innerText = `0${minutes}: 0${seconds}`
        }

        // document.getElementById("showTimer").innerText = `${minutes}: ${seconds}`
        console.log(seconds)

    }, 1000)
    document.getElementById("popUp__container").style.display = "none"
    document.getElementById("daysproject__box").style.display = "none"


    var stop = document.getElementById("timerStop").addEventListener("click", function () {
        clearInterval(timer)
    })
}

function startAgain() {
    let previousTime = document.getElementById("showTimer").innerText
    console.log(previousTime.split(":").map(Number))


    let [minutes, seconds] = previousTime.split(":").map(Number);
    console.log(seconds, minutes)
    let timer = setInterval(() => {
        seconds++;
        if (seconds > 59) {

            minutes++;
            seconds = 1
        }
        if (seconds > 9) {
            document.getElementById("showTimer").innerText = `0${minutes}: ${seconds}`
        } else {
            document.getElementById("showTimer").innerText = `0${minutes}: 0${seconds}`
        }

        // document.getElementById("showTimer").innerText = `${minutes}: ${seconds}`
        console.log(seconds)

    }, 1000)

    var stop = document.getElementById("timerStop").addEventListener("click", function () {
        clearInterval(timer)
    })
}

// function changeButton() {
//     if (document.getElementById("statingTime")) {

//         if (document.getElementById("statingTime").style.display == "none") {
//             document.getElementById("statingTime").style.display = "block";
//             document.getElementById("timerStop").style.display = "none";
//         } else {
//             document.getElementById("statingTime").style.display = "none";
//             document.getElementById("timerStop").style.display = "block";
//         }
//     }
// }