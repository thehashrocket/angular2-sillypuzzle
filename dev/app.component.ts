import {Component} from '@angular/core';
import {PuzzleComponent} from "./puzzle/puzzle.component";

@Component({
    selector: 'my-app',
    directives: [PuzzleComponent],
    template: `
       <my-puzzle></my-puzzle>
    `,
})
export class AppComponent {

}