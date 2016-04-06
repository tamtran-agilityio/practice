import {Component, View} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {RadioControlValueAccessor} from "./radio_value_accessor";
import {bootstrap} from "angular2/platform/browser";

@Component({
    selector: "my-app"
})
@View({
    templateUrl: "app/template.html",
    directives: [FORM_DIRECTIVES, RadioControlValueAccessor]
})
export class App {

    model;

    constructor() {
        this.model = {
            sex: "female"
        };
    }

}
