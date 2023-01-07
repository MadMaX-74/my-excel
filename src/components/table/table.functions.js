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
export function nextSelector(key, {row, coll}) {
    const MIN_VALUE = 0
    switch (key) {
        case 'Enter':
        case 'ArrowDown':
            row++
            break
        case 'Tab':
        case 'ArrowRight':
            coll++
            break
        case 'ArrowUp':
            row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
            break
        case 'ArrowLeft':
            coll = coll - 1 < MIN_VALUE ? MIN_VALUE : coll - 1
            break
    }
    return `[data-id="${row}:${coll}"]`
}
