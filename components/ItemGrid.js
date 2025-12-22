
import ItemCard from './ItemCard';

export default function ItemGrid({ title, items }) {
  return (
    <section className="items-section">
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        <div className="items-grid">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
