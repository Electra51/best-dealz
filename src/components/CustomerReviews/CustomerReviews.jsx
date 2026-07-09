/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./CustomerReviews.css";

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      product: "ULTRABOOST 22 SHOES",
      review:
        "Absolutely love these shoes! The comfort level is outstanding and they look amazing. I've been wearing them daily for running and casual outings. The quality is top-notch and delivery was super fast. Highly recommend!",
      helpful: 45,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Los Angeles, USA",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      date: "1 month ago",
      verified: true,
      product: "Adventure Backpack",
      review:
        "Best backpack I've ever owned! The storage capacity is impressive and all the compartments are well-designed. Perfect for my daily commute and weekend trips. The material feels durable and the padding is excellent.",
      helpful: 38,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Chicago, USA",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      date: "3 weeks ago",
      verified: true,
      product: "Classic Baseball Cap",
      review:
        "Great quality cap! Fits perfectly and the material is breathable. I love the design and it goes well with everything. The customer service was also excellent when I had a question about sizing.",
      helpful: 29,
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Miami, USA",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      rating: 4,
      date: "1 week ago",
      verified: true,
      product: "Response 3MC ADV Boots",
      review:
        "Really solid boots! They're comfortable right out of the box and the build quality is excellent. The only minor issue is they run slightly large, so I'd recommend sizing down. Overall, very happy with my purchase.",
      helpful: 22,
    },
    {
      id: 5,
      name: "Jessica Martinez",
      location: "Seattle, USA",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      rating: 5,
      date: "2 days ago",
      verified: true,
      product: "SUPERNOVA SHOES",
      review:
        "These shoes exceeded my expectations! Super comfortable for long walks and the cushioning is perfect. They're also stylish enough to wear with different outfits. Fast shipping and great packaging too!",
      helpful: 18,
    },
    {
      id: 6,
      name: "Robert Taylor",
      location: "Boston, USA",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
      rating: 5,
      date: "1 month ago",
      verified: true,
      product: "Premium Leather Backpack",
      review:
        "Worth every penny! The leather quality is exceptional and the craftsmanship is evident. It's spacious yet not bulky, and the laptop compartment is well-padded. This will definitely last for years.",
      helpful: 56,
    },
  ];

  const reviewsPerView = 3;
  const totalSlides = Math.ceil(reviews.length / reviewsPerView);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const renderStars = (rating) => {
    return (
      <div className="review-stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < rating ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  const getVisibleReviews = () => {
    const start = currentIndex * reviewsPerView;
    return reviews.slice(start, start + reviewsPerView);
  };

  return (
    <section className="customer-reviews">
      <div className="reviews-background">
        <div className="bg-pattern"></div>
      </div>

      <div className="reviews-header">
        <span className="section-badge">Testimonials</span>
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-description">
          Don't just take our word for it - hear from our satisfied customers
        </p>
        <div className="overall-rating">
          <div className="rating-score">4.8</div>
          <div className="rating-details">
            <div className="rating-stars-large">{renderStars(5)}</div>
            <p className="rating-text">Based on 12,450+ reviews</p>
          </div>
        </div>
      </div>

      <div className="reviews-carousel">
        <button
          className="carousel-btn prev-btn"
          onClick={prevSlide}
          aria-label="Previous reviews">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="reviews-slider">
          <div
            className="reviews-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="reviews-slide">
                {reviews
                  .slice(
                    slideIndex * reviewsPerView,
                    (slideIndex + 1) * reviewsPerView
                  )
                  .map((review) => (
                    <div key={review.id} className="review-card">
                      <div className="review-header">
                        <div className="reviewer-info">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="reviewer-avatar"
                          />
                          <div className="reviewer-details">
                            <h4 className="reviewer-name">{review.name}</h4>
                            <p className="reviewer-location">
                              {review.location}
                            </p>
                          </div>
                        </div>
                        {review.verified && (
                          <span className="verified-badge">
                            <svg
                              className="verified-icon"
                              fill="currentColor"
                              viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Verified Purchase
                          </span>
                        )}
                      </div>

                      <div className="review-rating">
                        {renderStars(review.rating)}
                        <span className="review-date">{review.date}</span>
                      </div>

                      <p className="review-product">
                        Purchased: {review.product}
                      </p>
                      <p className="review-text">{review.review}</p>

                      <div className="review-footer">
                        <button className="helpful-btn">
                          <svg
                            className="helpful-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                          Helpful ({review.helpful})
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-btn next-btn"
          onClick={nextSlide}
          aria-label="Next reviews">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="carousel-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="reviews-cta">
        <p className="cta-text">Have you purchased from us?</p>
        <button className="write-review-btn">
          <svg
            className="write-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Write a Review
        </button>
      </div>
    </section>
  );
};

export default CustomerReviews;
