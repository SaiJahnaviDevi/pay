import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  paymentHandler: any = null;

  constructor() {}

  ngOnInit() {
    this.invokeStripe();
  }

  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51L4b2pSFotZIR7DUzpwO95rnSzZ8wXonvWlPAqUqoYLWNHZhZ6vT18M5xiekISg0XjKvY9ebL4wO4C6LszcRqtOd00Zsg9krj3',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({ stripeToken });
        alert('Stripe token generated!');
      },
    });

    paymentHandler.open({
      name: 'The Yummy Eats',
      description: 'online transaction',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51L4b2pSFotZIR7DUzpwO95rnSzZ8wXonvWlPAqUqoYLWNHZhZ6vT18M5xiekISg0XjKvY9ebL4wO4C6LszcRqtOd00Zsg9krj3',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
  placeorder() {
    alert('oder placed succesfully');
  }
  gotocart() {
    alert('going to cart');
  }
}
