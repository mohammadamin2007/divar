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
    transition('* <=> *', [
        group([
            query(':enter', [
                style({display: "flex", position: "absolute", top: 0, left: 0, right: 0, bottom: 0})
            ],{optional: true}),
            query(':leave', [
                style({display: "flex", position: "absolute", top: 0, left: 0, right: 0, bottom: 0})
            ],{optional: true}),
            query(':leave', [
                animate("0.5s", style({transform: "translateX(-100%)"}))
            ],{optional: true}),
            query(":enter", [
                style({transform: "translate(100%)"})
            ],{optional: true}),
            query(":enter", [
                animate("0.5s", style({transform: "translateX(0)"}))
            ],{optional: true})
        ])
    ])
])
