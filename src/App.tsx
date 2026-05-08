import React, { useState, useEffect, useCallback } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import StatsRibbon from "./components/home/StatsRibbon";
import FeaturesSection from "./components/home/FeaturesSection";
import ProductsSection from "./components/home/ProductsSection";
import ProcessSection from "./components/home/ProcessSection";
import GallerySection from "./components/home/GallerySection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import CTASection from "./components/home/CTASection";
import Footer from "./components/layout/Footer";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";

export type Page = "home" | "shop" | "products" | "contact";

// Global CSS — add to your globals.css instead if preferred
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; color: #2a3d2b; overflow-x: hidden; }

  @keyframes fadeUp   { from { opacity:0; transform:translateY(30px) } to { opacity:1; transform:translateY(0) } }
  @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
  @keyframes pulse    { 0%,100% { opacity:.5; transform:scale(1) } 50% { opacity:1; transform:scale(1.5) } }
  @keyframes float    { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-12px) } }
  @keyframes sway     { 0%,100% { transform:rotate(-4deg) } 50% { transform:rotate(4deg) } }
  @keyframes scrollPulse { 0% { transform:scaleY(1);opacity:1 } 100% { transform:scaleY(0.2);opacity:0 } }

  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: none;
  }
`;

export default function App() {
  const [page, setPage]           = useState<Page>("home");
  const [productId, setProductId] = useState<string>("");

  // Scroll-reveal observer
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    const items = document.querySelectorAll(".reveal:not(.visible)");
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [page, productId]);

  const navigate = useCallback((target: Page) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openProduct = useCallback((id: string) => {
    setProductId(id);
    setPage("products");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToProducts = useCallback(() => {
    document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Inject global styles */}
      <style>{GLOBAL_STYLES}</style>

      {/* Persistent nav */}
      <Header onNavigate={navigate} currentPage={page} />

      {/* ── HOME PAGE ── */}
      {page === "home" && (
        <>
          <Hero              onNavigate={navigate} onScrollToProducts={scrollToProducts} />
          <StatsRibbon />
          <FeaturesSection />
          <ProductsSection   onOpenProduct={openProduct} onNavigate={navigate} />
          <ProcessSection />
          <GallerySection />
          <TestimonialsSection />
          <CTASection        onNavigate={navigate} />
          <Footer            onNavigate={navigate} />
        </>
      )}

      {/* ── SHOP PAGE (dedicated product catalogue) ── */}
      {page === "shop" && (
        <>
          <ShopPage onOpenProduct={openProduct} onNavigate={navigate} />
          <Footer   onNavigate={navigate} />
        </>
      )}

      {/* ── PRODUCT DETAIL PAGE ── */}
      {page === "products" && productId && (
        <>
          <ProductPage productId={productId} onNavigate={navigate} />
          <Footer      onNavigate={navigate} />
        </>
      )}

      {/* ── CONTACT PAGE ── */}
      {page === "contact" && (
        <>
          <ContactPage onNavigate={navigate} />
          <Footer      onNavigate={navigate} />
        </>
      )}
    </>
  );
}