import * as React from 'react'
import Loader from './Loader'
import { useGetAlbumQuery } from './services/album'
import { useSelector, useDispatch } from 'react-redux'
import { /*decrement,*/ updateAlbumColor } from './reducers/album'

function Photo({ data, error, isLoading }) {
    //const {data, error, loading } = photos;
    console.log('data', data);

    return (
      <div className="photos">
        {data.map(item => (
            <div className="photo">
                <div className="id">{item.id}</div>
                <div className="title">{item.title}</div>
                <div className="thumb">
                    <img src={`${item.thumbnailUrl}`} alt={`photo ${item.id}`} />
                </div>
                <div className="link">
                    <a href={`${item.url}`}>see more</a>
                </div>
            </div>
        ))}
      </div>
    );
  }
  
  export default Photo;