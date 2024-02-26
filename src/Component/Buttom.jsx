import "../sass/Button.scss";

function Buttom({icon, handleClick}) {
  return (
      <div className="btn_box">
        <button className="btn" onClick={handleClick}>{icon}
        </button>
      </div>
  );
}

export default Buttom;
