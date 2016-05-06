import {Injectable} from 'angular2/core';
import {Page1Data} from './Page2Data'
@Injectable()
export class Page2Service {
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