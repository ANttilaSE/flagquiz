System.register(['./app.component', '@angular/core/testing', '@angular/platform-browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1, testing_1, platform_browser_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }],
        execute: function() {
            ////////  SPECS  /////////////
            /// Delete this
            describe('Smoke test', function () {
                it('should run a passing test', function () {
                    expect(true).toEqual(true, 'should pass');
                });
            });
            describe('AppComponent with TCB', function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({ declarations: [app_component_1.AppComponent] });
                });
                it('should instantiate component', function () {
                    var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    expect(fixture.componentInstance instanceof app_component_1.AppComponent).toBe(true, 'should create AppComponent');
                });
                it('should have expected <h1> text', function () {
                    var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                    fixture.detectChanges();
                    var h1 = fixture.debugElement.query(function (el) { return el.name === 'h1'; }).nativeElement; // it works
                    h1 = fixture.debugElement.query(platform_browser_1.By.css('h1')).nativeElement; // preferred
                    expect(h1.innerText).toMatch(/angular app/i, '<h1> should say something about "Angular App"');
                });
            });
        }
    }
});
//# sourceMappingURL=app.component.spec.js.map