import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureCards from '../components/FeatureCards';
import PopularProducts from '../components/PopularProducts';
import DailyBestSells from '../components/DailyBestSells';
import DealsOfTheDay from '../components/DealsOfTheDay';
import NewsletterCTA from '../components/NewsletterCTA';
import ProductTypes from '../components/ProductTypes';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <Hero />
      <FeatureCards />
      <PopularProducts />
      <DailyBestSells />
      <DealsOfTheDay />
      <ProductTypes />
      <NewsletterCTA />
      <Footer />
    </div>
  );
}