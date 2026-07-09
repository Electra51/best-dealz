import React from "react";
import "./FeaturedCategories.css";

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Men's Sneakers",
      count: "150+ Products",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
      category: "Men's Sneaker",
      bgColor:
        "linear-gradient(135deg, rgb(102 126 234 / 18%) 0%, rgb(118 75 162 / 70%) 100%)",
    },
    {
      id: 2,
      name: "Boots Collection",
      count: "80+ Products",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b513f2cec8b440978d60ab6d014ad452_9366/Response_3MC_ADV_Boots_Black_EG9391_01_standard.jpg",
      category: "Men's Boot",
      bgColor:
        "linear-gradient(135deg, rgb(240 147 251 / 17%) 0%, rgb(164 43 59 / 44%) 100%)",
    },
    {
      id: 3,
      name: "Caps & Hats",
      count: "120+ Products",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c3981523051c4a978674ad3c01015664_9366/Dispatch_Trucker_Hat_Black_EY5534_01_standard.jpg",
      category: "Cap",
      bgColor:
        "linear-gradient(135deg, rgb(79 172 254 / 49%) 0%, rgb(0 242 254 / 0%) 100%)",
    },
    {
      id: 4,
      name: "Backpacks",
      count: "90+ Products",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d6ee0177281f42f0a254acb1016aa051_9366/Defender_Backpack_Red_EX7011_01_standard.jpg",
      category: "Backpack",
      bgColor:
        "linear-gradient(135deg, rgb(250 112 154 / 25%) 0%, rgb(254 225 64 / 30%) 100%)",
    },

    {
      id: 5,
      name: "Earphones",
      count: "200+ Products",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/b322cdef8e654551ace9adcc00f963ed_9366/adidas_Z.N.E._01_ANC_True_Wireless_Earbuds_Grey_EY5114_41_detail.jpg",
      category: "Earphones",
      bgColor:
        "linear-gradient(135deg, rgb(168 237 234 / 22%) 0%, rgb(254 214 227 / 26%) 70%)",
    },
    {
      id: 6,
      name: "Bottle",
      count: "100+ Products",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9c04ca9fa51408faf2fac8e0117abb9_9366/Steel_Metal_Bottle_1L_Black_EX7288_01_standard.jpg",
      category: "Bottle",
      bgColor:
        "linear-gradient(135deg, rgb(255 236 210 / 26%) 0%, rgb(252 182 159 / 41%) 100%)",
    },
  ];

  const handleCategoryClick = (category) => {
    const shopSection = document.querySelector(".products-container");
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    console.log("Selected category:", category);
  };

  return (
    <section className="featured-categories">
      <div className="categories-header">
        <span className="section-badge">Explore</span>
        <h2 className="section-title">Featured Categories</h2>
        <p className="section-description">
          Discover our curated collection of premium products across multiple
          categories
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => handleCategoryClick(cat.category)}>
            <div
              className="category-overlay"
              style={{ background: cat.bgColor }}></div>
            <div className="category-image">
              <img src={cat.image} alt={cat.name} />
            </div>
            <div className="category-content">
              <h3 className="category-name">{cat.name}</h3>
              <p className="category-count">{cat.count}</p>
              <button className="category-btn">
                Shop Now
                <svg
                  className="arrow-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
            <div className="category-shine"></div>
          </div>
        ))}
      </div>

      <div className="view-all-container">
        <a href="/shop" className="view-all-btn">
          View All Products
          <svg
            className="btn-arrow"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default FeaturedCategories;
