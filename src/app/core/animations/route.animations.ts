import {
  trigger,
  transition,
  style,
  animate,
  query,
  group
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [

    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(20px)'
      }),
      animate(
        '320ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        style({
          opacity: 1,
          transform: 'translateY(0)'
        })
      )
    ], { optional: true })

  ])
]);
