let table = document.getElementById('sampleTable');
function insert_Row() {
    //Write your code here
let i = 0;
  let html = `
  <tr>
  <td>New Cell${++i}</td>
  <td>New Cell${++i}</td>
  </tr> 
  `
  table.insertAdjacentHTML('afterbegin', html);
}
