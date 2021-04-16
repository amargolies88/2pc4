console.log('working');

//Assigns Column Buttons
const colBtn1 = document.getElementById("colBtn1");
const colBtn2 = document.getElementById("colBtn2");
const colBtn3 = document.getElementById("colBtn3");
const colBtn4 = document.getElementById("colBtn4");
const colBtn5 = document.getElementById("colBtn5");
const colBtn6 = document.getElementById("colBtn6");
const colBtn7 = document.getElementById("colBtn7");

//Listeners
colBtn1.onclick = e => dropChip(1);
colBtn2.onclick = e => dropChip(2);
colBtn3.onclick = e => dropChip(3);
colBtn4.onclick = e => dropChip(4);
colBtn5.onclick = e => dropChip(5);
colBtn6.onclick = e => dropChip(6);
colBtn7.onclick = e => dropChip(7);

console.log(colBtn1);



let swone = document.createElement("h2");
document.body.appendChild(swone);

function dropChip(col) {
    console.log(col);
}