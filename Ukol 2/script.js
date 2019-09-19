let table ='';
let row = prompt('Enter number of rows');
let column = prompt('Enter number of columns');

document.write('This is your chessboard:');

for(let i = 0;i < row; i++) {
    table += '<tr>';
    for(let x = 0;x < column; x++) {
        table += '<td>';
    }
}
document.write('<table>' + table + '</table>');