const ProductCard = ({ product }) => {
  const {
    title,
    brand,
    price,
    discountPercentage,
    rating,
    stock,
    availabilityStatus,
    thumbnail,
    description,
    category,
    tags,
    minimumOrderQuantity,
    shippingInformation,
    returnPolicy,
    warrantyInformation,
  } = product;

  // Calculate discounted price
  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2,
  );

  // Generate star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="star filled">
            ★
          </span>,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="star half">
            ★
          </span>,
        );
      } else {
        stars.push(
          <span key={i} className="star empty">
            ★
          </span>,
        );
      }
    }
    return stars;
  };

  const isLowStock = stock > 0 && stock < 10;
  const isOutOfStock = stock === 0;

  return (
    <div className="product-card">
      <div className="card-image-container">
        <img src={thumbnail} alt={title} className="card-image" />
        {discountPercentage > 0 && (
          <span className="discount-badge">-{discountPercentage}%</span>
        )}
        {isLowStock && !isOutOfStock && (
          <span className="low-stock-badge">Low Stock</span>
        )}
        {isOutOfStock && (
          <span className="out-of-stock-badge">Out of Stock</span>
        )}
      </div>

      <div className="card-content">
        <span className="category-tag">{category}</span>
        <h3 className="product-title">{title}</h3>
        <p className="brand-name">by {brand}</p>

        <div className="rating-container">
          <div className="stars">{renderStars(rating)}</div>
          <span className="rating-value">({rating})</span>
        </div>

        <p className="product-description">{description}</p>

        <div className="price-container">
          {discountPercentage > 0 ? (
            <>
              <span className="original-price">${price}</span>
              <span className="discounted-price">${discountedPrice}</span>
            </>
          ) : (
            <span className="current-price">${price}</span>
          )}
        </div>

        <div className="product-meta">
          <p className="meta-item">
            <strong>Stock:</strong> {availabilityStatus} ({stock} left)
          </p>
          <p className="meta-item">
            <strong>Min Order:</strong> {minimumOrderQuantity} units
          </p>
          <p className="meta-item">
            <strong>Shipping:</strong> {shippingInformation}
          </p>
        </div>

        <div className="card-actions">
          <button className="btn-primary" disabled={isOutOfStock}>
            {isOutOfStock ? "Out of Stock" : "Add to Cart"}
          </button>
          <button className="btn-secondary">Details</button>
        </div>

        <div className="card-footer">
          <span className="footer-info">🛡️ {warrantyInformation}</span>
          <span className="footer-info">↩️ {returnPolicy}</span>
        </div>

        <div className="tags-container">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
