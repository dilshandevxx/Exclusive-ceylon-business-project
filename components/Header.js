"use client";
import { useState } from 'react';
import Link from 'next/link';

// Categories list for the dropdown
const allCategories = [
  "Cakes", "Flowers", "Chocolates", "Clothing", "Electronics", 
  "Fashion", "Food & Restaurants", "Fruits", "Soft Toys", 
  "Grocery & Hampers", "Global Brands", "Home Appliances", 
  "Handicrafts", "Wellness"
];

export default function Header() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="header-wrapper">
      {/* Top Bar - Purple */}
      <header className="top-header">
        <div className="container top-header-content">
          <div className="logo">
            <Link href="/" className="logo-text">Exclusive Ceylon</Link>
          </div>
          
          <div className="search-container">
            <input type="text" placeholder="Type Here..." className="main-search-input" />
            <button className="main-search-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <div className="top-actions">
           <div className="lang-currency hidden-mobile">
              <span>LK</span>
              <span>En</span>
           </div>
            
            <Link href="/cart" className="top-action-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            
            <Link href="/auth/signin" className="top-action-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Secondary Nav - White/Gray */}
      <nav className="secondary-nav">
        <div className="container nav-content">
           <div className="category-dropdown-wrapper">
             <div 
               className="all-categories-btn"
               onClick={() => setIsCategoryOpen(!isCategoryOpen)}
             >
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
               </svg>
               <span>All Categories</span>
             </div>
             
             {isCategoryOpen && (
               <ul className="category-dropdown-menu">
                 {allCategories.map((cat, idx) => (
                   <li key={idx}>
                     <Link href={`/category/${cat.toLowerCase().replace(/ /g, '-')}`} className="cat-dropdown-item">
                       {cat}
                     </Link>
                   </li>
                 ))}
               </ul>
             )}
           </div>

           <div className="nav-links-scroll">
             <Link href="/" className="sec-nav-link">🏠 Home</Link>
             <Link href="/sale" className="sec-nav-link">🏷️ On Sale</Link>
             <Link href="/for-you" className="sec-nav-link">👤 For You</Link>
           </div>
        </div>
      </nav>
    </div>
  );
}
