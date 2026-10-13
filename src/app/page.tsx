'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Phone, ChevronRight, Clock, MapPin, Heart } from 'lucide-react';

export default function Home() {
  const WHATSAPP_NUMBER = "254707674789"; 

  const whatsappConsultUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Sarah, I would like to inquire about booking a bespoke cake with The Golden Whisk."
  )}`;

  return (
    <main className="min-h-screen bg-[#FDFCF7] text-stone-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#FDFCF7]/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Responsive Brand Signature */}
          <div className="flex items-center gap-3">
            {/* Whisk Mark Icon */}
            <div className="relative w-11 h-11 md:w-14 md:h-14 shrink-0">
              <Image
                src="/images/logo.png"
                alt="The Golden Whisk"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Mobile View: Clean high-contrast typography */}
            <div className="flex flex-col md:hidden">
              <span className="text-base font-serif tracking-wider font-bold text-stone-900 leading-none">
                THE GOLDEN WHISK
              </span>
              <span className="text-[9px] tracking-widest uppercase text-amber-700 font-semibold mt-0.5">
                Atelier Karen
              </span>
            </div>

            {/* Desktop / Tablet View: Custom 3D Gold Script */}
            <div className="hidden md:flex flex-col justify-center">
              <div className="relative h-12 w-56 lg:w-64">
                <Image
                  src="/images/logo-text.png"
                  alt="The Golden Whisk"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#flavors"
              className="hidden md:inline text-sm font-medium hover:text-amber-700 transition"
            >
              Flavors
            </a>
            <a
              href="#portfolio"
              className="hidden md:inline text-sm font-medium hover:text-amber-700 transition"
            >
              Gallery
            </a>
            <a
              href={whatsappConsultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-amber-700 transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Book Order</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-12 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          A Taste of Luxury in Every Bite
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight text-stone-900 leading-[1.1] mb-6">
          Sculpted for your <br />
          <span className="italic font-normal">grandest milestones.</span>
        </h1>
        <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg mb-8 leading-relaxed">
          From imaginative sculpted birthday centerpieces to multi-tiered wedding celebrations—baked fresh with the finest artisanal ingredients in Karen, Nairobi.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={whatsappConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-full font-medium transition shadow-lg flex items-center justify-center gap-2"
          >
            <span>Consult with Sarah</span>
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto bg-stone-100 hover:bg-stone-200 text-stone-800 px-8 py-4 rounded-full font-medium transition"
          >
            View Gallery
          </a>
        </div>

        {/* Hero Featured Showcase */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-stone-200/90 shadow-xl bg-white p-4 md:p-5 text-left">
          <div className="relative aspect-[16/10] md:aspect-[21/11] rounded-2xl overflow-hidden bg-stone-100">
            <Image
              src="/images/themed-birthday-cake.jpg"
              alt="Artisanal Handcrafted Themed Birthday Cake"
              fill
              priority
              className="object-cover object-center hover:scale-105 transition duration-700"
              onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
            />
          </div>
          <div className="pt-5 px-1">
            <span className="text-xs uppercase tracking-wider text-amber-700 font-bold">
              Signature Feature Piece
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mt-1 leading-tight">
              Custom Themed Celebration Art
            </h2>
            <p className="text-stone-600 text-sm md:text-base mt-2 leading-relaxed">
              Intricate storytelling and sculpted edible artistry designed individually around your milestone theme.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Grid */}
      <section id="portfolio" className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif">Bespoke Creations</h2>
            <p className="text-stone-500 mt-2">Weddings, milestones, and corporate celebrations</p>
          </div>
          <span className="text-xs uppercase tracking-widest text-stone-400 mt-4 md:mt-0">
            Hand-Crafted in Kerarapon, Karen
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Sunflower Milestone */}
          <div className="group bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition">
            <div className="aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden relative flex items-center justify-center">
              <Image
                src="/images/floral-tier.jpg"
                alt="Artisanal Sunflower Birthday Cake"
                fill
                className="object-cover object-top group-hover:scale-105 transition duration-500"
                onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
              />
            </div>
            <div className="pt-4">
              <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">Bespoke Milestones</span>
              <h3 className="font-serif text-xl mt-1">Artisanal Floral Tiers</h3>
              <p className="text-stone-500 text-sm mt-1">Textured vanilla buttercream paired with fresh sunflowers and delicate hand-placed gold accents.</p>
            </div>
          </div>

          {/* Card 2: Grand Wedding Centerpiece */}
          <div className="group bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition">
            <div className="aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden relative flex items-center justify-center">
              <Image
                src="/images/wedding-tier.jpg"
                alt="Architectural Multi-Tier Wedding Cake"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
              />
            </div>
            <div className="pt-4">
              <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">Grand Celebrations</span>
              <h3 className="font-serif text-xl mt-1">Botanical Wedding Tiers</h3>
              <p className="text-stone-500 text-sm mt-1">Multi-tier ridged buttercream adorned with cascading greenery, baby&apos;s breath, and bespoke gift boxes.</p>
            </div>
          </div>

          {/* Card 3: Milestone & Centenary Jubilees */}
          <div className="group bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition">
            <div className="aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden relative flex items-center justify-center">
              <Image
                src="/images/milestone-tier.jpg"
                alt="Centenary Landmark Jubilee Cake"
                fill
                className="object-cover group-hover:scale-105 transition duration-500"
                onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
              />
            </div>
            <div className="pt-4">
              <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">Jubilees & Galas</span>
              <h3 className="font-serif text-xl mt-1">Landmark Multi-Tier Art</h3>
              <p className="text-stone-500 text-sm mt-1">Architectural layered tiers sculpted for historic family centenaries and major corporate galas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Sponges & Flavors Menu */}
      <section id="flavors" className="py-20 px-6 bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-semibold">Signature Profiles</span>
            <h2 className="text-3xl md:text-4xl font-serif mt-2">Artisanal Sponges & Fillings</h2>
            <p className="text-stone-500 mt-3 text-sm md:text-base">
              Every tier is baked fresh from scratch using high-grade butter, real vanilla, and pure fruit reductions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-[#FDFCF7] border border-stone-200/80">
              <h3 className="font-serif text-lg font-bold text-stone-900">Belgian Dark Chocolate Truffle</h3>
              <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                Dense cocoa sponge layered with whipped dark chocolate ganache and a hint of espresso infusion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FDFCF7] border border-stone-200/80">
              <h3 className="font-serif text-lg font-bold text-stone-900">Passion & White Chocolate Forest</h3>
              <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                Light vanilla bean sponge soaked in fresh Coastal Kenya passion fruit reduction, layered with creamy white chocolate mousse.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FDFCF7] border border-stone-200/80">
              <h3 className="font-serif text-lg font-bold text-stone-900">Velvet Red & Cream Cheese</h3>
              <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                Traditional buttermilk red velvet crumb balanced with tangy, silky cream cheese frosting.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FDFCF7] border border-stone-200/80">
              <h3 className="font-serif text-lg font-bold text-stone-900">Aged Rich Fruitcake (Wedding Signature)</h3>
              <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                Dark, moist fruitcake slow-matured with rum-soaked dried fruits, warm festive spices, and wrapped in almond marzipan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Atelier Studio Details */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif">Made to Order in Karen</h2>
        <p className="text-stone-600 mt-4 leading-relaxed max-w-2xl mx-auto">
          We accept a strictly limited number of custom commissions each weekend to ensure every petal, tier, and crumb receives individual devotion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-left">
          <div className="p-5 rounded-xl border border-stone-200 bg-white shadow-sm flex flex-col items-center text-center">
            <Clock className="w-5 h-5 text-amber-700 mb-2" />
            <h4 className="font-semibold text-sm">Lead Time</h4>
            <p className="text-stone-500 text-xs mt-1">3–5 days for custom bakes; 2–4 weeks for wedding tiers.</p>
          </div>
          <div className="p-5 rounded-xl border border-stone-200 bg-white shadow-sm flex flex-col items-center text-center">
            <MapPin className="w-5 h-5 text-amber-700 mb-2" />
            <h4 className="font-semibold text-sm">Studio Location</h4>
            <p className="text-stone-500 text-xs mt-1">Kerarapon Drive, Karen, Nairobi (Delivery available across Nairobi).</p>
          </div>
          <div className="p-5 rounded-xl border border-stone-200 bg-white shadow-sm flex flex-col items-center text-center">
            <Heart className="w-5 h-5 text-amber-700 mb-2" />
            <h4 className="font-semibold text-sm">Finest Standards</h4>
            <p className="text-stone-500 text-xs mt-1">Baked completely fresh per order with no premixes or preservatives.</p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href={whatsappConsultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-medium transition shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>Chat Directly with Sarah</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone-200 text-center text-stone-500 text-xs">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="relative w-8 h-8 shrink-0">
            <Image
              src="/images/logo.png"
              alt="The Golden Whisk"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-serif text-sm font-semibold text-stone-800 tracking-wider">
            THE GOLDEN WHISK CAKE ATELIER
          </p>
        </div>
        <p className="mt-1">Kerarapon Drive, Karen, Nairobi, Kenya</p>
        <p className="mt-4 text-stone-400">© {new Date().getFullYear()} The Golden Whisk. All rights reserved.</p>
      </footer>
    </main>
  );
}