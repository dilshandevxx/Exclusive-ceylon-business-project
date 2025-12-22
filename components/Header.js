import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link href="/">TravelFinds</Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="nav">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/items" className="nav-link">Shop</Link>
          <Link href="/about" className="nav-link">About</Link>
        </nav>

        {/* Shopping Actions */}
        <div className="header-actions">
           <div className="search-bar">
             <input type="text" placeholder="Search..." className="search-input" />
             <button className="search-btn" aria-label="Search">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </button>
           </div>
           
           <Link href="/checkout">
             <button className="icon-btn" aria-label="Cart">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               <span className="cart-badge">2</span>
             </button>
           </Link>
           
           <Link href="/profile">
             <button className="icon-btn" aria-label="Profile">
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
               </svg>
             </button>
           </Link>

           <button className="icon-btn mobile-menu-btn" aria-label="Menu">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
             </svg>
           </button>
        </div>
      </div>
    </header>
  );
}
