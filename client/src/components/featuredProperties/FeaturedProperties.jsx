import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading featured properties. Please try again later.</div>;
  if (!data || data.length === 0) return <div>No featured properties available at the moment.</div>;

  return (
    <div className="fp">
      {data.map((item) => (
        <div className="fpItem" key={item._id}>
          <img
            src={item.photos.length > 0 ? item.photos[0] : "path/to/placeholder-image.jpg"}
            alt={item.name || "Featured property"} 
            className="fpImg"
          />
          <span className="fpName">{item.name}</span>
          <span className="fpCity">{item.city}</span>
          <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
          {item.rating && (
            <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
