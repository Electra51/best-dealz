import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { productService } from '../services/product.service';
import DealsHero from '../components/Features/Deals/DealsHero';
import DealsCoupon from '../components/Features/Deals/DealsCoupon';
import DealsSection from '../components/Features/Deals/DealsSection';
import ProductCard from '../components/Common/ProductCard';

const DealsPage = () => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    productService.getDeals().then(data => {
      setDeals(data);
      setLoading(false);
    });
  }, []);

  const todayDeals = deals.slice(0, 4);
  const weeklyDeals = deals.slice(4, 8);

  return (
    <>
      <Helmet>
        <title>Exclusive Deals & Flash Sales | Dealora</title>
        <meta name="description" content="Grab the best deals on premium sneakers and gear. Limited time offers." />
      </Helmet>

      <DealsHero />
      <DealsCoupon />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <DealsSection title="Today's Flash Deals" subtitle="Hurry up! These deals end soon." products={todayDeals} loading={loading} />
        <DealsSection title="Weekly Specials" subtitle="Curated deals just for this week." products={weeklyDeals} loading={loading} variant="secondary" />
      </main>
    </>
  );
};

export default DealsPage;