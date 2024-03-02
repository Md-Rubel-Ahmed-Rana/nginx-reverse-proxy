/* eslint-disable prettier/prettier */
const orders = [
  {
    id: 1,
    userId: 2,
    products: [
      {
        productId: 1,
        quantity: 3,
      },
    ],
    isPaid: true,
    paymentMethod: 'Stripe',
    status: 'Preparing for delivery',
  },
  {
    id: 2,
    userId: 1,
    products: [
      {
        productId: 2,
        quantity: 2,
      },
    ],
    isPaid: true,
    paymentMethod: 'bKash',
    status: 'Sending to Hub',
  },
  {
    id: 3,
    userId: 1,
    products: [
      {
        productId: 3,
        quantity: 1,
      },
    ],
    isPaid: true,
    paymentMethod: 'Paypal',
    status: 'Delivery on the way',
  },
  {
    id: 4,
    userId: 1,
    products: [
      {
        productId: 1,
        quantity: 3,
      },
    ],
    isPaid: true,
    paymentMethod: 'Rocket',
    status: 'Preparing for delivery',
  },
  {
    id: 5,
    userId: 1,
    products: [
      {
        productId: 1,
        quantity: 3,
      },
    ],
    isPaid: true,
    paymentMethod: 'Rocket',
    status: 'Preparing for delivery',
  },
];

export default orders;
