//Action button drop down
document.querySelector(".project__graph__details__button__actions").addEventListener("click", () => {
    document.querySelector(".project__graph__details__button__actions__div").classList.toggle("project__graph__details__button__actions__div__show");
})




let myChart = document.getElementById("mixed-chart").getContext("2d");

// Chart.defaults.bubble.backgroundColor = "red"
// let value = 1,
//     valueY = 2;
let week1 = 9,
    week2 = 4,
    week3 = 0,
    week4 = 0;


let mixedChart = new Chart(myChart, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Week 1',
            data: [week1, week2, week3, week4],
            backgroundColor: "crimson"
        }, {
            label: 'Week 2',
            data: [6, 9, 0, 0],
            backgroundColor: "cyan"
            // type: 'bar',
        }, {
            label: 'Week 3',
            data: [2, 6, 0, 0],
            backgroundColor: "teal"
            // type: 'bar',
        }, {
            label: 'Week 4',
            data: [4, 7, 0, 0],
            backgroundColor: "cornflowerblue"
            // type: 'bar',
        }],
        labels: ['November 2020', 'December 2020', 'January 2021', 'Febraury 2021']
    },
    options: {
        responsive: false,
        // maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Population growth (millions): Europe & Africa'
        },
        legend: {
            display: true
        },
        scales: {
            xAxes: [{
                // ticks: {
                //     stepSize: 600,
                // },
                // stacked: true,
                gridLines: {
                    lineWidth: 1,
                    color: "rgba(0,0,0,0.5)"
                }
            }],
            yAxes: [{
                // stacked: true,
                ticks: {
                    min: 0,
                    stepSize: 1,
                },

            }]
        }
    }
});


let minutes = 0;
let minutesGraphData = setInterval(() => {
    if (localStorage.getItem("minutes")) {
        minutes = localStorage.getItem("minutes")
        console.log(minutes);
        // console.log("hello")

        mixedChart.data.datasets[0].data[2] = minutes;

        mixedChart.update();


        document.getElementById("project__graph__dynamic__time").innerText = `0.0${minutes}`;
        document.getElementById("project__graph__dynamic__time__nonBillable").innerText = `0.0${minutes}`;
    }
}, 1000 * 60)



// console.log(minutes);


// let previousTime = document.getElementById("showTimer").innerText
// console.log(previousTime.split(":").map(Number))







if (localStorage.getItem("newProjectList")) {
    let newProjectList = JSON.parse(localStorage.getItem("newProjectList"));
    // console.log(newProjectgraphData);
    let newProjectDetails = newProjectList[newProjectList.length - 1];
    // console.log(newProjectDetails)

    document.querySelector(".project__graph__client").innerText = newProjectDetails.clientName;
    document.querySelector(".project__graph__details__text h3").innerText = `[${newProjectDetails.projectCode}] ${newProjectDetails.projectName}`;
    document.querySelector(".project__graph__dates p").innerText = ` ${newProjectDetails.projectStartDate} - ${newProjectDetails.projectEndDate}`

    let html = "";


    newProjectDetails.projectTasks.forEach(item => {
        html += `<div class="graph__analysis__allTime__details__list__item">
                    <h4>${item}</h4>
                    <div>
                        <p id="graph__analysis__allTime__details__list__item__time"></p>
                        <p>0.00</p>
                    </div>
                </div>`;
    });

    document.getElementById("graph__analysis__allTime__details__list").innerHTML = html;





    // let html = `<p class="project__graph__client">$</p>
    //     <div class="project__graph__details">
    //         <div class="project__graph__details__text">
    //             <h3></h3>
    //             <span>NON-BILLABLE</span>
    //         </div>
    //         <div class="project__graph__details__button">
    //             <button class="project__graph__details__button__edit">
    //                 <i class="fa fa-pencil" aria-hidden="true"></i>
    //                 Edit Project
    //             </button>
    //             <div>
    //                 <button class="project__graph__details__button__actions" id="project__graph__details__button__actions">
    //                     Actions
    //                     <i class="fa fa-angle-down" aria-hidden="true"></i>
    //                 </button>
    //                 <div class="project__graph__details__button__actions__div" id="project__graph__details__button__actions__div">
    //                     <a href="#">Pin</a>
    //                     <a href="#">Duplicate</a>
    //                     <a href="#">Archive</a>
    //                     <a href="#">Delete</a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="project__graph__dates">
    //         <p></p>
    //     </div>`;

    // document.getElementById("project__graph").innerHTML = html;


}