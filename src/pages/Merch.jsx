import { useState, useEffect } from "react";
import { ArrowRight, ShoppingBag, ExternalLink, Loader } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionWrapper from "../components/SectionWrapper";

// ─── Your Shopify store domain ────────────────────────────────────────────────
const SHOPIFY_DOMAIN = "xs5imu-cy.myshopify.com";

// Fetch all published products — no token needed, this is a public endpoint.
// Every new product you add in Shopify will automatically appear here.
async function fetchProducts() {
  const res = await fetch(
    import.meta.env.DEV
      ? `/shopify-api/products.json?limit=250`
      : `https://${SHOPIFY_DOMAIN}/products.json?limit=250`,
    { headers: { "Content-Type": "application/json" } }
  );
  if (!res.ok) throw new Error(`Shopify fetch failed: ${res.status}`);
  const data = await res.json();
  return data.products;
}

// ─── Skeleton card shown while loading ───────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-img skeleton-pulse" />
      <div className="skeleton-body">
        <div
          className="skeleton-line skeleton-pulse"
          style={{ width: "70%", height: "1rem", marginBottom: "0.5rem" }}
        />
        <div
          className="skeleton-line skeleton-pulse"
          style={{ width: "40%", height: "0.85rem" }}
        />
      </div>
    </div>
  );
}

// ─── Single product card ──────────────────────────────────────────────────────
function ProductCard({ product, index }) {
  const image = product.images?.[0]?.src;
  const variant = product.variants?.[0];
  const price = variant
    ? parseFloat(variant.price).toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
      })
    : null;
  const shopUrl = `https://${SHOPIFY_DOMAIN}/products/${product.handle}`;
  const available = product.variants?.some((v) => v.available);

  return (
    <a
      href={shopUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="product-img-wrap">
        {image ? (
          <img src={image} alt={product.title} className="product-img" />
        ) : (
          <div className="product-img-placeholder">
            <ShoppingBag size={32} />
          </div>
        )}
        {/* Overlay */}
        <div className="product-overlay">
          <span className="product-overlay-cta">
            Shop Now <ExternalLink size={13} />
          </span>
        </div>
        {/* Badge */}
        {!available && <div className="product-badge sold-out">Sold Out</div>}
        {available && product.variants?.length > 1 && (
          <div className="product-badge variants">
            {product.variants.length} options
          </div>
        )}
      </div>

      {/* Info */}
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        {product.product_type && (
          <p className="product-type">{product.product_type}</p>
        )}
        <div className="product-footer">
          {price && <span className="product-price">{price}</span>}
          <span className="product-cta-link">
            {available ? "Buy on Shopify" : "View Item"} →
          </span>
        </div>
      </div>
    </a>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function Merch() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <style>{`
        /* ── Product grid ── */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        /* ── Product card ── */
        .product-card {
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255,255,255,0.08);
          overflow: hidden;
          text-decoration: none;
          transition: border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
          animation: fadeUp 0.5s ease both;
          background: var(--navy-dark, #0a0e1a);
        }
        .product-card:hover {
          border-color: rgba(212,175,55,0.4);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }

        /* ── Image ── */
        .product-img-wrap {
          position: relative;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .product-card:hover .product-img {
          transform: scale(1.06);
        }
        .product-img-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.15);
        }

        /* ── Overlay ── */
        .product-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10,14,26,0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .product-card:hover .product-overlay { opacity: 1; }
        .product-overlay-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid rgba(212,175,55,0.8);
          color: #d4af37;
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.6rem 1.2rem;
          transition: background 0.25s;
        }
        .product-overlay-cta:hover { background: rgba(212,175,55,0.1); }

        /* ── Badges ── */
        .product-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.25rem 0.6rem;
          backdrop-blur: 8px;
        }
        .product-badge.sold-out  { background: rgba(180,50,50,0.75); color: #fff; }
        .product-badge.variants  { background: rgba(10,14,26,0.75);  color: rgba(212,175,55,0.9); border: 1px solid rgba(212,175,55,0.3); }

        /* ── Info ── */
        .product-info {
          padding: 1.25rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .product-title {
          font-size: 1rem;
          font-weight: 400;
          color: rgba(255,255,255,0.9);
          margin: 0 0 0.25rem;
          line-height: 1.4;
        }
        .product-type {
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin: 0 0 1rem;
        }
        .product-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }
        .product-price {
          font-size: 0.95rem;
          color: #d4af37;
          font-weight: 500;
        }
        .product-cta-link {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          transition: color 0.25s;
        }
        .product-card:hover .product-cta-link { color: rgba(212,175,55,0.8); }

        /* ── Skeleton ── */
        .skeleton-card {
          border: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
        }
        .skeleton-img  { aspect-ratio: 1/1; width: 100%; }
        .skeleton-body { padding: 1.25rem 1.5rem; }
        .skeleton-line { border-radius: 2px; }
        .skeleton-pulse {
          background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.6s infinite;
        }
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        /* ── Error / empty states ── */
        .merch-state {
          text-align: center;
          padding: 5rem 1rem;
          color: rgba(255,255,255,0.4);
        }
        .merch-state h3 { color: rgba(255,255,255,0.7); margin-bottom: 0.5rem; }
      `}</style>

      <PageHero
        label="Merch & Products"
        title="Shop with style"
        subtitle="Curated products from Heart and Word by Adetoun. Every purchase supports the ministry."
        bg="bg-navy-dark"
      />

      <SectionWrapper className="bg-navy">
        {/* Loading */}
        {loading && (
          <div className="products-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="merch-state">
            <ShoppingBag
              size={40}
              style={{ margin: "0 auto 1rem", opacity: 0.3 }}
            />
            <h3>Couldn't load products</h3>
            <p style={{ fontSize: "0.85rem" }}>
              Please check back shortly or visit the store directly.
            </p>
            <a
              href={`https://${SHOPIFY_DOMAIN}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ display: "inline-flex", marginTop: "1.5rem" }}
            >
              Visit Store <ExternalLink size={14} />
            </a>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && products.length === 0 && (
          <div className="merch-state">
            <ShoppingBag
              size={40}
              style={{ margin: "0 auto 1rem", opacity: 0.3 }}
            />
            <h3>Products coming soon</h3>
            <p style={{ fontSize: "0.85rem" }}>
              Check back soon for new arrivals.
            </p>
          </div>
        )}

        {/* Products grid */}
        {!loading && !error && products.length > 0 && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <p
                style={{
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {products.length}{" "}
                {products.length === 1 ? "product" : "products"}
              </p>
              <a
                href={`https://${SHOPIFY_DOMAIN}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "rgba(212,175,55,0.7)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Visit Full Store <ExternalLink size={12} />
              </a>
            </div>
            <div className="products-grid">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </>
        )}
      </SectionWrapper>

      {/* CTA banner */}
      <SectionWrapper className="bg-navy-dark">
        <div className="border border-dashed border-gold-DEFAULT/30 p-12 text-center">
          <p className="section-label mb-4">Shopify Store</p>
          <h2 className="font-display text-3xl font-light text-white mb-4">
            Browse the Full Collection
          </h2>
          <div className="divider-gold" />
          <p className="text-white/50 font-body mb-8">
            Secure checkout, worldwide shipping, and more products available
            directly on our store.
          </p>
          <a
            href={`https://${SHOPIFY_DOMAIN}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            Shop on Shopify <ArrowRight size={16} />
          </a>
        </div>
      </SectionWrapper>
    </>
  );
}
