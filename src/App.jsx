import "./App.scss";
import Album from "./components/Album/Album";
import Greeting from "./components/Greeting/Greeting";
import albums from "./data/albums.json";
import { useState } from "react";

export default function App() {
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  const handleSelectedAlbum = (id) => {
    if (id === selectedAlbumId) {
      setSelectedAlbumId(null);
    } else {
      setSelectedAlbumId(id)
    }
  }

  return (
    <div className="App">
      <h1>My music collection</h1>
      
      <Greeting
        firstName="Alice" 
        albumCount={albums.length} 
      />

      <div className="albums">
        {albums.map(
          (album) => {
            return (
              <Album
                imageSource={album.imageSource}
                title={album.title}
                description={album.description}
                year={album.year}
                likes={album.likes}
                selected={album.id === selectedAlbumId}
                handleSelectedAlbum={() => handleSelectedAlbum(album.id)}
                key={album.id}
              />
            );
          }
        )}
      </div>
    </div>
  );
}