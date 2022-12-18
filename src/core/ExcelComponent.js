import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {} ) {
    super($root, options.listeners );
    this.name = options.name
  }
  // return component layout
  toHTML() {
    return ''
  }
  init() {
    this.initDomListeners()
  }
  destroy() {
    this.removeDomListeners()
  }
}
