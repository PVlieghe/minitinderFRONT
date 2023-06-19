import BaseController from "./basecontroller.js";


class IndexController extends BaseController {
    constructor() {
        super()
    }

}

export default () => window.indexController = new IndexController()
