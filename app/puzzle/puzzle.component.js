System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number);
                    console.log(this.switch2Number);
                    console.log(this.switch3Number);
                    console.log(this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: 'my-puzzle',
                        template: "\n        <section class=\"setup\">\n        <h2>Game Setup</h2>\n            Enter your name please: <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section\n        [ngClass]=\"{\n        puzzle: true, \n        solved: switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number}\"\n        [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\">\n            <h2>The Puzzle | {{switch1.value == switch1Number && switch2.value == switch2Number && switch3.value == switch3Number && switch4.value == switch4Number ? 'You Won!' : 'You Lost.'}}</h2>\n            <p>Ok, welcome <span class=\"name\">{{ name.value }}</span></p>\n            <br/>\n            Switch 1: <input type=\"text\" #switch1 (keyup)=\"0\"><br/>\n            Switch 2: <input type=\"text\" #switch2 (keyup)=\"0\"><br/>\n            Switch 3: <input type=\"text\" #switch3 (keyup)=\"0\"><br/>\n            Switch 4: <input type=\"text\" #switch4 (keyup)=\"0\"><br/>\n        </section>\n        <h2 [hidden]=\"switch1.value != switch1Number || switch2.value != switch2Number || switch3.value != switch3Number || switch4.value != switch4Number\">Congratulations <span class=\"name\">{{ name.value }}</span>, you did it!</h2>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBNkJBO2dCQUFBO2dCQWlCQSxDQUFDO2dCQVhHLGtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUUvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkExQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsUUFBUSxFQUFFLDB4Q0FtQlQ7cUJBR0osQ0FBQzs7bUNBQUE7Z0JBbUJGLHNCQUFDO1lBQUQsQ0FqQkEsQUFpQkMsSUFBQTtZQWpCRCw2Q0FpQkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1wdXp6bGUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwic2V0dXBcIj5cbiAgICAgICAgPGgyPkdhbWUgU2V0dXA8L2gyPlxuICAgICAgICAgICAgRW50ZXIgeW91ciBuYW1lIHBsZWFzZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvblxuICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgIHB1enpsZTogdHJ1ZSwgXG4gICAgICAgIHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyfVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cIntkaXNwbGF5OiBuYW1lLnZhbHVlID09PSAnJyA/ICdub25lJyA6ICdibG9jayd9XCI+XG4gICAgICAgICAgICA8aDI+VGhlIFB1enpsZSB8IHt7c3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJiBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiYgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyID8gJ1lvdSBXb24hJyA6ICdZb3UgTG9zdC4nfX08L2gyPlxuICAgICAgICAgICAgPHA+T2ssIHdlbGNvbWUgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3sgbmFtZS52YWx1ZSB9fTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgU3dpdGNoIDE6IDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gxIChrZXl1cCk9XCIwXCI+PGJyLz5cbiAgICAgICAgICAgIFN3aXRjaCAyOiA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMiAoa2V5dXApPVwiMFwiPjxici8+XG4gICAgICAgICAgICBTd2l0Y2ggMzogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDMgKGtleXVwKT1cIjBcIj48YnIvPlxuICAgICAgICAgICAgU3dpdGNoIDQ6IDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2g0IChrZXl1cCk9XCIwXCI+PGJyLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8aDIgW2hpZGRlbl09XCJzd2l0Y2gxLnZhbHVlICE9IHN3aXRjaDFOdW1iZXIgfHwgc3dpdGNoMi52YWx1ZSAhPSBzd2l0Y2gyTnVtYmVyIHx8IHN3aXRjaDMudmFsdWUgIT0gc3dpdGNoM051bWJlciB8fCBzd2l0Y2g0LnZhbHVlICE9IHN3aXRjaDROdW1iZXJcIj5Db25ncmF0dWxhdGlvbnMgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3sgbmFtZS52YWx1ZSB9fTwvc3Bhbj4sIHlvdSBkaWQgaXQhPC9oMj5cbiAgICBgXG5cblxufSlcblxuZXhwb3J0IGNsYXNzIFB1enpsZUNvbXBvbmVudCB7XG4gICAgc3dpdGNoMU51bWJlcjogbnVtYmVyO1xuICAgIHN3aXRjaDJOdW1iZXI6IG51bWJlcjtcbiAgICBzd2l0Y2gzTnVtYmVyOiBudW1iZXI7XG4gICAgc3dpdGNoNE51bWJlcjogbnVtYmVyO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoMU51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoMk51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoM051bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoNE51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gxTnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gyTnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gzTnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2g0TnVtYmVyKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
