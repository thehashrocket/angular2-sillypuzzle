import {Component} from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    selector: 'my-puzzle',
    template: `
        <section class="setup">
        <h2>Game Setup</h2>
            Enter your name please: <input type="text" #name (keyup)="0">
        </section>
        <section
        [ngClass]="{
        puzzle: true, 
        solved: switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number}"
        [ngStyle]="{display: name.value === '' ? 'none' : 'block'}">
            <h2>The Puzzle | {{switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number ? 'You Won!' : 'You Lost.'}}</h2>
            <p>Ok, welcome <span class="name">{{ name.value }}</span></p>
            <br/>
            Switch 1: <input type="text" #switch1 (keyup)="0"><br/>
            Switch 2: <input type="text" #switch2 (keyup)="0"><br/>
            Switch 3: <input type="text" #switch3 (keyup)="0"><br/>
            Switch 4: <input type="text" #switch4 (keyup)="0"><br/>
        </section>
        <h2 [hidden]="switch1.value != switch1Number || switch2.value != switch2Number || switch3.value != switch3Number || switch4.value != switch4Number">Congratulations <span class="name">{{ name.value }}</span>, you did it!</h2>
    `


})

export class PuzzleComponent {
    switch1Number: number;
    switch2Number: number;
    switch3Number: number;
    switch4Number: number;

    ngOnInit() {
        this.switch1Number = Math.round(Math.random());
        this.switch2Number = Math.round(Math.random());
        this.switch3Number = Math.round(Math.random());
        this.switch4Number = Math.round(Math.random());

        console.log(this.switch1Number);
        console.log(this.switch2Number);
        console.log(this.switch3Number);
        console.log(this.switch4Number);
    }
}