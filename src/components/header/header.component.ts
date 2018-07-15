
import { Component, Input } from '@angular/core';
@Component({
    selector: 'header-nav',
    templateUrl: 'header.component.html'
})
export class HeaderNav {
    @Input()
    headertitle: string = "";
    constructor() {

    }
}