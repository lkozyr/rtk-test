import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateAlbumId, toggleShowPhotos } from './reducers/album'

import './App.css';
import Album from './Album'
import Error from './Error'


function App() {
  const albumId = useSelector((state) => state.album.id)
  const showPhotos = useSelector((state) => state.album.showPhotos)
  console.log('showPhotos', showPhotos)

  const dispatch = useDispatch()
  const [showAlbum, setShowAlbum] = React.useState(false);
  const [inputAlbumId, setInputAlbumId] = React.useState(albumId);
  

  const handleInputChange = (e) => {
    const id = parseInt(e.target.value) || '';
    setInputAlbumId(id)
  }

  const handleClick = () => {
    if (inputAlbumId >= 1 && inputAlbumId <= 100) {
      dispatch(updateAlbumId(inputAlbumId))
      setShowAlbum(true)
    } else {
      setShowAlbum(false)
    }
  }

  const handleKeyUp = (e) => {
    console.log('e', e)
    if (e.keyCode === 13) {
      handleClick()
    }
  }

  const handlePhotoSwitch = (e) => {
    console.log(e.target.checked)
    dispatch(toggleShowPhotos())
  }

  return (
    <div className="app">
      <div>
        <label htmlFor="album_input">Enter album id [1..100]</label>
        <br />
        <input
          id="album_input"
          type="text"
          inputMode="numeric"
          pattern="[0-9\s]{1,3}"
          autoComplete="cc-number"
          maxLength="3"
          value={inputAlbumId || ''}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
        />

        <button onClick={handleClick}>Show album</button>
      </div>
      <div>
        <input 
          type="checkbox"
          id="photoswitch"
          onChange={handlePhotoSwitch} 
        />
        <label htmlFor="photoswitch">Load photos for album</label>
      </div>
      <div>
        {showAlbum && <Album/>}
        {!showAlbum && albumId && (<Error text="Enter a valid album id"/>)}
      </div>
    </div>
  );
}

export default App;
