import "./Album.scss";

export default function Album(props) {
  const handleRemoveAlbum = (e) => {
    // Prevent selected album from being triggered
    e.stopPropagation();
    props.removeAlbum();
  }
  
  const handleSelectedAlbum = () => {
    props.selectAlbum();
  }

  const handleLikeAlbum = (e) => {
    e.stopPropagation();
    props.likeAlbum();
  }

  return (
    <div 
      onClick={handleSelectedAlbum}
      className={`album ${props.isSelected ? "album--selected" : ""}`}>
      <div>
        <img className="album__cover" src={props.imageSource} />
      </div>
      <div className="album__details">
        <h2 className="album__title">{props.title}</h2>
        <p>{props.description}</p>
        <span onClick={handleLikeAlbum} className="album__like">❤️</span>
        <span className="album__likes">{props.likes}</span>
        <button onClick={handleRemoveAlbum} className={"album__remove"}>Remove album</button>
      </div>
    </div>
  );
}
