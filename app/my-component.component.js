System.register(['@angular/core', "./test.component"], function(exports_1, context_1) {
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
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = 'Hashrocket';
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n                ",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBQTtnQkFPQSxDQUFDO2dCQUhHLHVDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7Z0JBQzdCLENBQUM7Z0JBZEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLG9CQUNHO3dCQUNiLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN0QyxVQUFVLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO3FCQUM5QixDQUFDOzt3Q0FBQTtnQkFTRiwyQkFBQztZQUFELENBUEEsQUFPQyxJQUFBO1lBUEQsdURBT0MsQ0FBQSIsImZpbGUiOiJteS1jb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Rlc3RDb21wb25lbnR9IGZyb20gXCIuL3Rlc3QuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktY29tcG9uZW50JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW1Rlc3RDb21wb25lbnRdLFxufSlcblxuZXhwb3J0IGNsYXNzIE15Q29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIG5hbWU6IHN0cmluZztcblxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLm5hbWUgPSAnSGFzaHJvY2tldCc7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
