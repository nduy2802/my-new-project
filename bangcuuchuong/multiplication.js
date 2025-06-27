

window.onload = function() {
    var table = document.getElementById('bangcuuchuong');
    let html = '';
    for (let i = 1; i <= 9; i++) {
        html += '<tr>';
        for (let j = 1; j <= 9; j++) {
            html += `<td>${i} x ${j} = ${i*j}</td>`;
        }
        html += '</tr>';
    }
    table.innerHTML = html;
}
