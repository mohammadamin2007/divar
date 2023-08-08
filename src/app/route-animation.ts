import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
 } from '@angular/animations';


export const routeAnimation = trigger('routeAnimations', [
    transition('home => support', [

        group([
            query(':enter', [
                style({display: "flex", position: "absolute", top: "4rem", left: 0, right: 0, bottom: 0})
            ]),
            query(':leave', [
                style({display: "flex", position: "absolute", top: 0, left: 0, right: 0, bottom: 0})
            ]),
            query(':leave', [
                animate("0.5s", style({transform: "translateX(-100%)"}))
            ]),
            query(":enter", [
                style({transform: "translate(-100%)"})
            ]),
            query(":enter", [
                animate("0.5s", style({transform: "translateX(0)"}))
            ])
        ])
    ]),transition('support => home', [
        group([
            query(':enter', [
                style({display: "flex", position: "absolute", top: 0, left: 0, right: 0, bottom: 0})
            ]),
            query(':leave', [
                style({display: "flex", position: "absolute", top: "4rem", left: 0, right: 0, bottom: 0})
            ]),
            query(':leave', [
                animate("0.5s", style({transform: "translateX(-100%)"}))
            ]),
            query(":enter", [
                style({transform: "translate(-100%)"})
            ]),
            query(":enter", [
                animate("0.5s", style({transform: "translateX(0)"}))
            ])
        ])
    ]),
])
