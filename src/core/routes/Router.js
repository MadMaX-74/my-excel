import {ActiveRoute} from './ActiveRoute';
import {$} from '../dom';

export class Router {
    constructor(selector, routes) {
        if (!selector) {
            throw new Error('Selector is not provided in Router ')
        }
        this.$placeholder = $(selector)
        this.$routes = routes
        this.page = null

        this.changePageHandler = this.changePageHandler.bind(this)

        this.init()
    }
    init() {
        window.addEventListener('hashchange', this.changePageHandler)
        this.changePageHandler()
    }
    async changePageHandler() {
        if (this.page) {
            this.page.destroy()
        }
        this.$placeholder.clear()
        const Page = ActiveRoute.path.includes('excel') ?
            this.$routes.excel : this.$routes.dashboard
        this.page = new Page(ActiveRoute.param)
        const root = await this.page.getRoot()
        this.$placeholder.append(root)
        this.page.afterRender()
    }
     destroy() {
        window.removeEventListener('hashchange', this.changePageHandler)
     }
 }
