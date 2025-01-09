import * as React from 'react'
import Error from './Error'
import Loader from './Loader'
import { useGetAlbumQuery } from './services/album'
import { useSelector, useDispatch } from 'react-redux'
import { /*decrement,*/ updateAlbumColor } from './reducers/album'

const generateBgColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // eslint-disable-next-line
  const rhex = `${new Number(r).toString(16).padStart(2, '0')}`;
  // eslint-disable-next-line
  const ghex = `${new Number(g).toString(16).padStart(2, '0')}`;
  // eslint-disable-next-line
  const bhex = `${new Number(b).toString(16).padStart(2, '0')}`;

  return `#${rhex}${ghex}${bhex}`;
}

function Album() {
  const albumId = useSelector((state) => state.album.id)
  const albumColor = useSelector((state) => state.album.color)
  const dispatch = useDispatch()
 
  const { data, error, isLoading } = useGetAlbumQuery(albumId)

  React.useEffect(() => {
    const newColor = generateBgColor();
    dispatch(updateAlbumColor(newColor))
  },[albumId]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="albums">
      {isLoading && (<Loader />)}
      {error && (<Error text={error.text || error.status}/>)}
      {data && (
        <div className="album" style={{background: albumColor}}>
          <div  className="album-id">Album id: {data.id}</div>
          <div  className="album-title">{data.title}</div>
        </div>
      )}
      
    </div>
  );
  }
  
  export default Album;