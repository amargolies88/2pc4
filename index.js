console.log('working');

let player = 2;
//Assigns Column Buttons
const colBtn1 = document.getElementById("colBtn1");
const colBtn2 = document.getElementById("colBtn2");
const colBtn3 = document.getElementById("colBtn3");
const colBtn4 = document.getElementById("colBtn4");
const colBtn5 = document.getElementById("colBtn5");
const colBtn6 = document.getElementById("colBtn6");
const colBtn7 = document.getElementById("colBtn7");

//Listeners
colBtn1.onclick = e => dropChip(1, player);
colBtn2.onclick = e => dropChip(2, player);
colBtn3.onclick = e => dropChip(3, player);
colBtn4.onclick = e => dropChip(4, player);
colBtn5.onclick = e => dropChip(5, player);
colBtn6.onclick = e => dropChip(6, player);
colBtn7.onclick = e => dropChip(7, player);

console.log(colBtn1);



let swone = document.createElement("h2");
document.body.appendChild(swone);

function dropChip(col, player) {
    console.log(`chip dropped in col ${col} by player ${player}`);
}