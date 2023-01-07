const CODES = {
    A: 65,
    Z: 90
}
function toChar(_, idx) {
    return String.fromCharCode(CODES.A + idx)
}
// function createCell(row, col) {
//     return `
//     <div class="cell" contenteditable data-col="${col}" data-row="${row}">
//     </div>
//     `
// }
function createCell(row) {
    return function(_, col) {
        return `<div 
        class="cell" 
        contenteditable 
        data-col="${col}" 
        data-type="cell"
        data-id="${row}:${col}">
        </div>`
    }
}
function createColumn(column, index) {
    // eslint-disable-next-line max-len
    return `<div class="column" data-type="resizable" data-col="${index}">${column} 
                <div class="col-resize" data-resize="col"></div>
            </div>`
}
function createRow(index, content) {
    // eslint-disable-next-line max-len
    const resizer = index ? '<div class="row-resize" data-resize="row"></div>' : ''
    return `<div class="row" data-type="resizable">
        <div class="row-info">
            ${index ? index : ''}
            ${resizer}
        </div>
        <div class="row-data">${content}</div>
        </div>`
}
export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map((el, index) => createColumn(el, index))
        .join('')
    rows.push(createRow(null, cols))
    for (let row = 0; row < rowsCount; row++) {
        const cells = new Array(colsCount)
            .fill('')
            // .map((_, col) => createCell(row, col))
            .map(createCell(row))
            .join('')
    rows.push(createRow(row + 1, cells))
    }
    return rows.join('')
}
