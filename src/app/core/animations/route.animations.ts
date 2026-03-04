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
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%'
      })
    ], { optional: true }),

    group([
      query(':leave', [
        animate('250ms ease-out',
          style({ opacity: 0, transform: 'translateY(10px)' })
        )
      ], { optional: true }),

      query(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('250ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ], { optional: true })
    ])
  ])
]);
