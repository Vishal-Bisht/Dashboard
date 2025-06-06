// Dummy data for CustomerChat messages
const messages = [
  // Luis - Github (convId: 1)
  {
    id: 1,
    convId: 1,
    type: 'customer',
    text: `I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.`,
    time: '1min',
    user: 'Luis - Github',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    convId: 1,
    type: 'agent',
    text: 'Let me just look into this for you, Luis.',
    time: '1min',
    seen: true,
  },
  {
    id: 11,
    convId: 1,
    type: 'customer',
    text: `Can I return an item if I lost the receipt?`,
    time: '2min',
    user: 'Luis - Github',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 12,
    convId: 1,
    type: 'agent',
    text: 'You can, but we will need some proof of purchase.',
    time: '2min',
    seen: true,
  },
  {
    id: 13,
    convId: 1,
    type: 'customer',
    text: `Thank you! How long does a refund take?`,
    time: '3min',
    user: 'Luis - Github',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 14,
    convId: 1,
    type: 'agent',
    text: 'Refunds are processed within 5-7 business days.',
    time: '3min',
    seen: true,
  },
  // Last two agent messages use User icon instead of Bot
  {
    id: 15,
    convId: 1,
    type: 'agent',
    text: 'Is there anything else I can help you with today?',
    time: '4min',
    seen: true,
    useUserIcon: true,
  },
  {
    id: 16,
    convId: 1,
    type: 'agent',
    text: 'Thank you for contacting support, have a great day!',
    time: '5min',
    seen: true,
    useUserIcon: true,
  },
  // Ivan - Nike (convId: 2)
  {
    id: 3,
    convId: 2,
    type: 'customer',
    text: `Hi there, I have a question about my Nike order. Can you help?`,
    time: '1min',
    user: 'Ivan - Nike',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 4,
    convId: 2,
    type: 'agent',
    text: 'Of course, Ivan! Please provide your order number.',
    time: '1min',
    seen: true,
  },
  {
    id: 21,
    convId: 2,
    type: 'customer',
    text: `Order number is 12345.`,
    time: '2min',
    user: 'Ivan - Nike',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 22,
    convId: 2,
    type: 'agent',
    text: 'Thank you, let me check the status for you.',
    time: '2min',
    seen: true,
  },
  {
    id: 23,
    convId: 2,
    type: 'customer',
    text: `Is it possible to change the delivery address?`,
    time: '3min',
    user: 'Ivan - Nike',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 24,
    convId: 2,
    type: 'agent',
    text: 'Yes, please provide the new address.',
    time: '3min',
    seen: true,
  },
  {
    id: 25,
    convId: 2,
    type: 'agent',
    text: 'Your order is eligible for address change.',
    time: '4min',
    seen: true,
    useUserIcon: true,
  },
  {
    id: 26,
    convId: 2,
    type: 'agent',
    text: 'Let us know if you need anything else!',
    time: '5min',
    seen: true,
    useUserIcon: true,
  },
  // Lead from New York (convId: 3)
  {
    id: 5,
    convId: 3,
    type: 'customer',
    text: `Good morning, I need some help with my account.`,
    time: '1min',
    user: 'Lead from New York',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 6,
    convId: 3,
    type: 'agent',
    text: 'Hi! What seems to be the issue with your account?',
    time: '1min',
    seen: true,
  },
  {
    id: 31,
    convId: 3,
    type: 'customer',
    text: `I can't log in to my dashboard.`,
    time: '2min',
    user: 'Lead from New York',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 32,
    convId: 3,
    type: 'agent',
    text: 'Have you tried resetting your password?',
    time: '2min',
    seen: true,
  },
  {
    id: 33,
    convId: 3,
    type: 'customer',
    text: `Yes, but I didn't receive the reset email.`,
    time: '3min',
    user: 'Lead from New York',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 34,
    convId: 3,
    type: 'agent',
    text: 'I will resend the password reset email now.',
    time: '3min',
    seen: true,
  },
  {
    id: 35,
    convId: 3,
    type: 'agent',
    text: 'Please check your inbox in a few minutes.',
    time: '4min',
    seen: true,
    useUserIcon: true,
  },
  {
    id: 36,
    convId: 3,
    type: 'agent',
    text: 'Let us know if you need further assistance.',
    time: '5min',
    seen: true,
    useUserIcon: true,
  },
  // Breaking API problems (convId: 4)
  {
    id: 7,
    convId: 4,
    type: 'customer',
    text: `Bug report: The API is returning a 500 error when I try to fetch data.`,
    time: '1min',
    user: 'Breaking API problems',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    id: 8,
    convId: 4,
    type: 'agent',
    text: 'Thank you for reporting. We are investigating the API issue.',
    time: '1min',
    seen: true,
  },
  {
    id: 41,
    convId: 4,
    type: 'customer',
    text: `Is there a workaround in the meantime?`,
    time: '2min',
    user: 'Breaking API problems',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    id: 42,
    convId: 4,
    type: 'agent',
    text: 'You can try using the v2 endpoint as a temporary solution.',
    time: '2min',
    seen: true,
  },
  {
    id: 43,
    convId: 4,
    type: 'customer',
    text: `Thanks, I'll try that.`,
    time: '3min',
    user: 'Breaking API problems',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    id: 44,
    convId: 4,
    type: 'agent',
    text: 'Let us know if you encounter any more issues.',
    time: '3min',
    seen: true,
  },
  {
    id: 45,
    convId: 4,
    type: 'agent',
    text: 'We appreciate your feedback!',
    time: '4min',
    seen: true,
    useUserIcon: true,
  },
  {
    id: 46,
    convId: 4,
    type: 'agent',
    text: 'Have a great day!',
    time: '5min',
    seen: true,
    useUserIcon: true,
  },
  // Miracle - Exemplary Bank (convId: 5)
  {
    id: 9,
    convId: 5,
    type: 'customer',
    text: `Hey there, I'm here to check my bank statement.`,
    time: '1min',
    user: 'Miracle - Exemplary Bank',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    id: 10,
    convId: 5,
    type: 'agent',
    text: 'Sure, Miracle! Please verify your account number.',
    time: '1min',
    seen: true,
  },
  {
    id: 51,
    convId: 5,
    type: 'customer',
    text: `My account number is 987654321.`,
    time: '2min',
    user: 'Miracle - Exemplary Bank',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    id: 52,
    convId: 5,
    type: 'agent',
    text: 'Thank you, let me pull up your statement.',
    time: '2min',
    seen: true,
  },
  {
    id: 53,
    convId: 5,
    type: 'customer',
    text: `Can you send me the last 3 months' statement?`,
    time: '3min',
    user: 'Miracle - Exemplary Bank',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    id: 54,
    convId: 5,
    type: 'agent',
    text: 'Statement sent to your registered email.',
    time: '3min',
    seen: true,
  },
  {
    id: 55,
    convId: 5,
    type: 'agent',
    text: 'Is there anything else I can help you with?',
    time: '4min',
    seen: true,
    useUserIcon: true,
  },
  {
    id: 56,
    convId: 5,
    type: 'agent',
    text: 'Thank you for banking with us!',
    time: '5min',
    seen: true,
    useUserIcon: true,
  },
];

export default messages;
