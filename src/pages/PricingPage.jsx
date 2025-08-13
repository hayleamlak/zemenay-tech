import React, { useState } from "react";
import "../styles/PricingPage.css";

const plans = [
  {
    name: "Community",
    subtitle: "Perfect for personal projects and learning",
    price: "Free",
    features: [
      "Basic website template",
      "Community support",
      "Documentation access",
      "Limited features",
    ],
    buttonLabel: "Get Started",
  },
  {
    name: "WordPress Solution",
    subtitle: "Tailored WordPress sites for businesses",
    price: "Custom Pricing",
    features: [
      "Based on project requirements",
      "Professional WordPress site",
      "Custom design & branding",
      "Responsive & mobile-friendly",
      "SEO optimization",
      "Content management system",
    ],
    buttonLabel: "Request Quote",
    popular: true,
  },
  {
    name: "Enterprise",
    subtitle: "Complete digital solutions for organizations",
    price: "Let's Talk",
    features: [
      "Full-scale digital ecosystem",
      "Custom web applications",
      "Advanced integrations",
      "Dedicated support team",
      "Scalable infrastructure",
      "Ongoing maintenance",
    ],
    buttonLabel: "Contact Sales",
  },
];

const comparisonData = [
  { feature: "Basic website template", community: true, wordpress: false, enterprise: false },
  { feature: "Professional WordPress site", community: false, wordpress: true, enterprise: false },
  { feature: "Custom design & branding", community: false, wordpress: true, enterprise: true },
  { feature: "Responsive & mobile-friendly", community: false, wordpress: true, enterprise: true },
  { feature: "SEO optimization", community: false, wordpress: true, enterprise: true },
  { feature: "Content management system", community: false, wordpress: true, enterprise: true },
  { feature: "Full-scale digital ecosystem", community: false, wordpress: false, enterprise: true },
  { feature: "Custom web applications", community: false, wordpress: false, enterprise: true },
  { feature: "Advanced integrations", community: false, wordpress: false, enterprise: true },
  { feature: "Community support", community: true, wordpress: false, enterprise: false },
  { feature: "Dedicated support team", community: false, wordpress: false, enterprise: true },
  { feature: "Ongoing maintenance", community: false, wordpress: false, enterprise: true },
];

// Add documentation access feature row at bottom with all true
const documentationAccessRow = {
  feature: "Documentation access",
  community: true,
  wordpress: true,
  enterprise: true,
};

const faqs = [
  {
    question: "Do I need to pay anything to try it out?",
    answer:
      "The Community plan is completely free to start. For WordPress or Enterprise, we offer a free consultation before any commitment.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes! You can start with the Community or WordPress plan and upgrade to Enterprise whenever your needs grow. We’ll ensure a smooth transition.",
  },
  {
    question: "How does pricing work for the WordPress and Enterprise plans?",
    answer:
      "Pricing is custom for each client based on scope and requirements. We’ll walk you through a quick consultation to understand your needs and provide a fair quote.",
  },
  {
    question: "Who is the Enterprise plan for?",
    answer:
      "The Enterprise plan is built for organizations needing custom web applications, full-scale digital ecosystems, and advanced integration. It includes dedicated support, ongoing maintenance, and complete customization.",
  },
  {
    question: "What is the WordPress Solution plan?",
    answer:
      "Our WordPress Solution plan offers professionally designed WordPress websites tailored to your brand. It includes SEO optimization, responsive design, and a user-friendly CMS to manage your content with ease.",
  },
  {
    question: "What’s included in the Community plan?",
    answer:
      "The Community plan gives you access to a basic website template and community support. It’s perfect for individuals or early-stage teams looking to get online quickly with minimal cost.",
  },
];

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="pricing-container">
      {/* Pricing Header */}
      <header className="pricing-header">
        <h1>Simple, Transparent Pricing</h1>
        <p>
          Choose the perfect plan for your needs. From free community options to enterprise solutions, we've got you covered.
        </p>
      </header>

      {/* Pricing Cards */}
      <section className="plans-grid">
        {plans.map(({ name, subtitle, price, features, buttonLabel, popular }, i) => (
          <div
            key={i}
            className={`plan-card glass-card ${popular ? "popular-plan" : ""}`}
          >
            {popular && <div className="badge">Most Popular</div>}
            <h2>{name}</h2>
            <p className="subtitle">{subtitle}</p>
            <p className="price">{price}</p>
            <ul className="features-list">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="btn-primary">{buttonLabel}</button>
          </div>
        ))}
      </section>

      {/* Feature Comparison Table */}
      <section className="pricing-table-section">
        <h2>Compare Plans</h2>
        <div className="table-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Community</th>
                <th>WordPress Solution</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td>{row.feature}</td>
                  <td>{row.community ? "✔" : "✖"}</td>
                  <td>{row.wordpress ? "✔" : "✖"}</td>
                  <td>{row.enterprise ? "✔" : "✖"}</td>
                </tr>
              ))}
              {/* Documentation access bottom row */}
              <tr className="documentation-row">
                <td>{documentationAccessRow.feature}</td>
                <td>✔</td>
                <td>✔</td>
                <td>✔</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
