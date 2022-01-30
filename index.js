const mode = document.getElementById("mode");
const mainBody = document.getElementById("main-body");
const addbtn = document.getElementById("add");
const inputdata = document.getElementById("input");
const list = document.getElementById("list");
const dataStore = [];
let id = 0;
mode.addEventListener("click", () => {
    if (mode.className == "mode-night-button") {
        mode.className = "mode-day-button";
        mainBody.className = "main-body-day";

    } else {
        mode.className = "mode-night-button";
        mainBody.className = "main-body-night";
    }
})
addbtn.addEventListener("click", () => {
    if (inputdata.value == "") {
        alert("invlid Input");
    } else {
        dataAddInArray(inputdata.value);
        inputdata.value = "";
    }

})
function dataAddInArray(data) {
    const obj = {
        id: id,
        title: data,
        completed: false,

    };

    dataStore.push(obj);
    id++;
    updateDisplay();
}
function updateDisplay(arr) {
    const list = document.getElementById("list");
    list.innerHTML = "";
    const todoArr = arr || dataStore;
    for (let todo of todoArr) {
        const div = document.createElement("div");
        div.setAttribute("id", "inline");
        const itm = document.createElement("div");
        itm.innerHTML = todo.title;
        const delet = document.createElement("button");
        delet.innerHTML = "X";


        const li = document.createElement("input");
        li.setAttribute("type", "checkbox");
        li.setAttribute("id", "checkboxinput");
        const comple = document.createElement("button");
        comple.innerHTML = `<input type="checkbox"/>`;
        // comple.setAttribute("type","li");
        comple.addEventListener("click", () => {
            completedFunction(todo);
            comple.innerHTML = "";
            comple.innerHTML = `<input type="checkbox" checked/>`
        })
        delet.addEventListener("click", () => {
            deleteEle(todo);
            id--;

        })
        if(todo.completed){
            itm.style.textDecoration="line-through";
           comple.innerHTML=`<input type="checkbox" checked/>`
            
        }
        div.append(comple);
        div.append(delet);
        div.append(itm);
        list.append(div);
    }
}

function deleteEle(index) {
    dataStore.splice(index.id, 1);
    updateDisplay();
}

const completedFunction = function (itm) {
    itm.completed = true;
    updateDisplay();
}




