import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg
          className="feature-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          />
        </svg>
      ),
      title: "Free Shipping",
      description:
        "Free delivery on orders over $50. Shop without worrying about extra costs.",
      color: "#4facfe",
      bgGradient:
        "linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1))",
    },
    {
      id: 2,
      icon: (
        <svg
          className="feature-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "100% Authentic",
      description:
        "All products are genuine and sourced directly from authorized retailers.",
      color: "#f093fb",
      bgGradient:
        "linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(245, 87, 108, 0.1))",
    },
    {
      id: 3,
      icon: (
        <svg
          className="feature-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      title: "Easy Returns",
      description:
        "30-day hassle-free return policy. Your satisfaction is our priority.",
      color: "#a8edea",
      bgGradient:
        "linear-gradient(135deg, rgba(168, 237, 234, 0.1), rgba(254, 214, 227, 0.1))",
    },
    {
      id: 4,
      icon: (
        <svg
          className="feature-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "24/7 Support",
      description:
        "Our dedicated team is here to help you anytime, day or night.",
      color: "#ffecd2",
      bgGradient:
        "linear-gradient(135deg, rgba(255, 236, 210, 0.1), rgba(252, 182, 159, 0.1))",
    },
    {
      id: 5,
      icon: (
        <svg
          className="feature-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "Secure Payment",
      description:
        "Your payment information is protected with advanced encryption.",
      color: "#fa709a",
      bgGradient:
        "linear-gradient(135deg, rgba(250, 112, 154, 0.1), rgba(254, 225, 64, 0.1))",
    },
    {
      id: 6,
      icon: (
        <svg
          className="feature-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Best Price Guarantee",
      description:
        "We ensure you get the best value for your money with competitive prices.",
      color: "#667eea",
      bgGradient:
        "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-choose-background">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      <div className="why-choose-header">
        <span className="section-badge">Our Promise</span>
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-description">
          Experience exceptional service and quality that sets us apart from the
          rest
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="feature-card"
            style={{
              background: feature.bgGradient,
              animationDelay: `${index * 0.1}s`,
            }}>
            <div className="feature-card-inner">
              <div
                className="icon-wrapper"
                style={{ background: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-shine"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="trust-stats">
        <div className="stat-card">
          <div className="stat-number">50K+</div>
          <div className="stat-label">Happy Customers</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-card">
          <div className="stat-number">4.8★</div>
          <div className="stat-label">Average Rating</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-card">
          <div className="stat-number">99%</div>
          <div className="stat-label">Satisfaction Rate</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-card">
          <div className="stat-number">24/7</div>
          <div className="stat-label">Support Available</div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
