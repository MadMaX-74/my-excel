import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {$} from '@core/dom';

export class Table extends ExcelComponent {
    static className = 'excel__table'
    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        });
    }
    toHTML() {
        return createTable(20)
    }
    onMousedown(event) {
        if (event.target.dataset.resize) {
            const $resizer = $(event.target)
            const $parent = $resizer.closest('[data-type="resizable"]')
            const cords = $parent.getCoords()
            const type = $resizer.data.resize
            const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)
            document.onmousemove = (e) => {
                if (type === 'col') {
                    const delta = e.pageX - cords.right
                    const value = cords.width + delta
                    $parent.$el.style.width = value + 'px'
                    cells .forEach(el => el.style.width = value + 'px')
                } else {
                    const delta = e.pageY - cords.bottom
                    const value = cords.height + delta
                    $parent.$el.style.height = value + 'px'
                }
            }
            document.onmouseup = () => {
                document.onmousemove = null
            }
        }
    }
}
