// let table = document.getElementById('sampleTable');
// // let i = 0;
// function insert_Row() {
//     //Write your code here
// let i = 0;
//   let html = `
//   <tr>
//   <td>New Cell${++i}</td>
//   <td>New Cell${++i}</td>
//   </tr> 
//   `
//   table.insertAdjacentHTML('afterbegin', html);
// }

function insert_Row() {
let table = document.getElementById('sampleTable');
let newRow = table.insertRow(0);
let newCell1 = newRow.insertCell(0);
let newCell2 = newRow.insertCell(1);
newCell1.innerHTML = 'New Cell1';
newCell2.innerHTML = 'New Cell2';
}