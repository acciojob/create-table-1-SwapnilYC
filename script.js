let table = document.getElementById('sampleTable');
function insert_Row() {
    //Write your code here
  let html = `
  <tr>
  <td>New Cell1</td>
  <td>New Cell2</td>
  </tr> 
  `
  table.insertAdjacentHTML('afterbegin', html);
}
