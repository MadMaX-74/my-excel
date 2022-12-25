import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

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
            console.log('Start resize')
        }
    }
}
