import React from 'react';

const Faq = () => {
  const faqData = [
    {
      question: 'What is a SAAS platform?',
      answer:
        'A SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.',
    },
    {
      question: 'How does billing work?',
      answer:
        'We offer a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.',
    },
    {
      question: 'Can I get a refund for my subscription?',
      answer:
        'We offer a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer:
        'To cancel your We subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing.',
    },
    {
      question: 'Can I try this platform for free?',
      answer:
        'We offer a free trial of its platform for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.',
    },
    {
      question: 'How do I access documentation?',
      answer:
        "Documentation is available on the company's website and can be accessed by logging in to your account. The documentation provides detailed information on how to use the platform, as well as code examples and other resources.",
    },
    {
      question: 'How do I contact support?',
      answer:
        "If you need help with the platform or have any other questions, you can contact the company's support team by submitting a support request through the website or by emailing support@We.com.",
    },
    {
      question: 'Do you offer any discounts or promotions?',
      answer:
        'We may offer discounts or promotions from time to time. To stay up-to-date on the latest deals and special offers, you can sign up for the company\'s newsletter or follow it on social media.',
    },
    {
      question: 'How do we compare to other similar services?',
      answer:
        'This platform is a highly reliable and feature-rich service that offers a wide range of tools and functionality. It is competitively priced and offers a variety of billing options to suit different needs and budgets.',
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-screen">
      <div className="flex flex-col items-center mt-5">
        <h2 className="font-bold text-5xl mt-5 text-[#000F38] tracking-tight">FAQ</h2>
        <p className=" font-semibold text-xl text-[#0A4B7F]  mt-3">Frequently asked questions</p>
      </div>
      <div className="grid gap-5  mx-auto mt-8">
        {faqData.map((faq, index) => (
          <div key={index} className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>{faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">{faq.answer}</p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
