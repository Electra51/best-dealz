import React from "react";
import Hero from "../components/Hero/Hero";
import FeaturedCategories from "../components/FeaturedCategories/FeaturedCategories";
import BestSellers from "../components/BestSellers/BestSellers";
import SaleBanner from "../components/SaleBanner/SaleBanner";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews";
import Newsletter from "../components/Newsletter/Newsletter";
import ShopByBrand from "../components/ShopByBrand";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <ShopByBrand/>
      <BestSellers />
      <SaleBanner />
      <WhyChooseUs />
      <CustomerReviews />
      <Newsletter />
    </div>
  );
};

export default HomePage;
