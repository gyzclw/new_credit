import {Injectable} from '@angular/core';
import {Page1Data} from './Page1Data'
@Injectable()
export class Page1Service {
    private message:any;
    private slides:any;

    constructor() {
    }

    getMessage() {
        this.message = Page1Data.messagesOrder;
        return this.message;
    }

    getSlides() {
        this.slides = Page1Data.slidesOrder;
        return this.slides;
    }

}
