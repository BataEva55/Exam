import './App.css'; 

const CatCard = ({ cat }) => {
  return (
    <div className="cat-card">
      <img src={cat.image} alt={cat.name} />
      <div className="cat-info">
        <h2>{cat.name}</h2>
        <p>{cat.description}</p>
      </div>
    </div>
  );
};

export default CatCard;
