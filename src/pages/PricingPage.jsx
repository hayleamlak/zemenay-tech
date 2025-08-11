import React from "react";
import "../styles/pricingpage.css";

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

export default function PricingPage() {
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
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Features</th>
              <th>Community</th>
              <th>WordPress Solution</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Website Template</td>
              <td>Basic</td>
              <td>Custom</td>
              <td>Custom</td>
            </tr>
            <tr>
              <td>Support</td>
              <td>Community</td>
              <td>Priority</td>
              <td>Dedicated</td>
            </tr>
            <tr>
              <td>SEO Optimization</td>
              <td>-</td>
              <td>✔</td>
              <td>✔</td>
            </tr>
            <tr>
              <td>Custom Integrations</td>
              <td>-</td>
              <td>Limited</td>
              <td>✔</td>
            </tr>
            <tr>
              <td>Scalable Infrastructure</td>
              <td>-</td>
              <td>-</td>
              <td>✔</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
