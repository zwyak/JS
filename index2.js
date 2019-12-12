var array = []
class PI {
  constructor(name, age, phone, details) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.details = details;
  }
}

function AddPI(name, age, phone, details){
let pi = new PI(name, age, phone, details);

let tr = document.createElement("tr");
tr.setAttribute("id", pi.name);
tr.onclick = onClickCustom;

let td1 = document.createElement("td");
td1.innerHTML = pi.name;

let td2 = document.createElement("td");
td2.innerHTML = pi.age;

let td3 = document.createElement("td");
td3.innerHTML = pi.phone;

let td4 = document.createElement("td");
td4.innerHTML = pi.details;

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);

document.getElementById("table").appendChild(tr);

array.push(pi)
}

function onClickCustom(){
  alert(this.getAttribute('id'));
}
