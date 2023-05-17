import "./App.scss";
import Album from "./components/Album/Album";
import Greeting from "./components/Greeting/Greeting";
import Temperature from "./components/Temperature/Temperature";
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
    const newAlbums = albums.filter( (album) => { 
      return album.id !== id;
    })

    setAlbums(newAlbums);
  }

  const likeAlbum = (id) => {
    const newAlbums = albums.map((album) => {
      if (album.id === id) {
        return {
          ...album,
          likes: album.likes + 1
        }
      }
      
      return album;
    });

    setAlbums(newAlbums);
  }

  return (
    <div className="App">
      <Temperature />

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
                likeAlbum={()=> likeAlbum(album.id)}
              />
            );
          }
        )}
      </div>
    </div>
  );
}