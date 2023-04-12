let table = document.getElementById('sampleTable');
let i = 0;
function insert_Row() {
    //Write your code here
  let html = `
  <tr>
  <td>New Cell${++i}</td>
  <td>New Cell${++i}</td>
  </tr> 
  `
  table.insertAdjacentHTML('afterbegin', html);
}
