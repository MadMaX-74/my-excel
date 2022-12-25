const CODES = {
    A: 65,
    Z: 90
}
function toChar(_, idx) {
    return String.fromCharCode(CODES.A + idx)
}
function createCell(_, col) {
    return `<div class="cell" contenteditable data-col="${col}"></div>`
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
    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(createCell)
            .join('')
    rows.push(createRow(i + 1, cells))
    }
    return rows.join('')
}
