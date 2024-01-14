import "../sass/Card.scss";

function Card({name, img}) {
  return (
    <div className="card">
      <p className="card_name">{name}</p>
      <div className="card_circle"></div>
      <img className="card_img" src={img} alt={name}/>
    </div>
  );
}
export default Card;
