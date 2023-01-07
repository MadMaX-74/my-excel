import {range} from '@core/utils';

export function shouldResize(event) {
    return event.target.dataset.resize
}
export function isCell(event) {
    return event.target.dataset.type === 'cell'
}
export function matrix($target, $current) {
    const target = $target.id(true)
    const current = $current.id(true)
    const colls = range(current.coll, target.coll)
    const rows = range(current.row, target.row)
    return colls.reduce((acc, col) => {
        rows.forEach(row => acc.push(`${row}:${col}`))
        return acc
    }, [])
}
