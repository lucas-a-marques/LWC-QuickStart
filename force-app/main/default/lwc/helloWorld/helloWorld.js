/**
 * Created by marqu on 12/05/2022.
 */

import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
    greeting = 'World';
    changeHandler(event) {
        this.greeting = event.target.value;
    }
}