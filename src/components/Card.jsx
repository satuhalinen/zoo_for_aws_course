const Card = ({ name, likes, addLikes, removeLikes, onRemove }) => {
  return (
    <div className="card">
      <button className="close" onClick={onRemove}>
        close
      </button>
      <img src={`https://source.unsplash.com/400x400/?${name}`} alt={name} />

      <h2>{name}</h2>
      <div className="counts">
        <button onClick={addLikes}>
          <span className="material-symbols-outlined thumb">thumb_up</span>
        </button>

        <div className="likes_container">
          <p id="amount">{likes}</p>
          <span id="favorite" className="material-symbols-outlined">
            {likes >= 0 ? "favorite" : "heart_broken"}
          </span>
        </div>

        <button onClick={removeLikes}>
          <span className="material-symbols-outlined">thumb_down</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
