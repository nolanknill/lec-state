import "./App.scss";
import Album from "./components/Album/Album";
import Greeting from "./components/Greeting/Greeting";
import albumsJson from "./data/albums.json";
import { useState } from "react";

export default function App() {
  const [albums, setAlbums] = useState(albumsJson);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  const selectAlbum = (id) => {
    if (id === selectedAlbumId) {
      setSelectedAlbumId(null);
    } else {
      setSelectedAlbumId(id)
    }
  }

  const removeAlbum = (id) => {
    // filter creates a new array, no need to spread
    const newAlbums = albums.filter((album) => album.id !== id);
    setAlbums(newAlbums);
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
                key={album.id}
                title={album.title}
                imageSource={album.imageSource}
                description={album.description}
                year={album.year}
                likes={album.likes}
                isSelected={album.id === selectedAlbumId}
                selectAlbum={() => selectAlbum(album.id)}
                removeAlbum={() => removeAlbum(album.id)}
              />
            );
          }
        )}
      </div>
    </div>
  );
}