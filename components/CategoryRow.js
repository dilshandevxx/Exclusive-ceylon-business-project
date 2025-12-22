export default function CategoryRow() {
  const categories = [
    { name: "Watches", image: "/images/hero-1.jpg" },
    { name: "Accessories", image: "/images/hero-2.jpg" },
    { name: "Wallets", image: "/images/hero-3.jpg" },
    { name: "Traditional Masks", image: "/images/hero-4.jpg" },
    { name: "Backpacks", image: "/images/hero-5.jpg" },
  ];

  return (
    <section className="category-section">
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-row">
          {categories.map((cat, index) => (
            <div key={index} className="category-item">
              <div className="category-image-wrapper">
                <img src={cat.image} alt={cat.name} className="category-image" />
                <div className="category-overlay">
                  <span className="category-name">{cat.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
