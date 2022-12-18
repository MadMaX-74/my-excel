import {capitalize} from '@core/utils';

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener`)
        }
        this.$root = $root
        this.listeners = listeners
    }
    initDomListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                const name = this.name || ''
                throw new Error(
                    // eslint-disable-next-line max-len
                    `Method ${method} is not implemented in ${name} component`
                )
            }
             this.$root.on(listener, this[method].bind(this))
        })
    }
    removeDomListeners() {}
}
function getMethodName(eventName) {
    return 'on' + capitalize(eventName)
}
