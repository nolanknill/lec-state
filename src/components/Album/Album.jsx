import "./Album.scss";

export default function Album(props) {
  return (
    <div 
      onClick={props.handleSelectedAlbum}
      className={`album ${props.selected ? "album--selected" : ""}`}>
      <div>
        <img className="album__cover" src={props.imageSource} />
      </div>
      <div className="album__details">
        <h2 className="album__title">{props.title}</h2>
        <p>{props.description}</p>
        <span className="album__like">❤️</span>
        <span className="album__likes">{props.likes}</span>
      </div>
    </div>
  );
}
