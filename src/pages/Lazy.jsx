import React, {useEffect,useState} from 'react'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

  const Lazy = () => {
  const [images,setImages]= useState([]);
  async function getImages() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      console.log(data)
      setImages(data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }
  useEffect(() => {
    getImages();
  },[]);
  return (
    <div className='grid grid-cols-4 gap-2'>
      
      {images ? images.map((item)=>
        <LazyLoadImage key={item.id} effect="blur" height="500px" className="max-w-[100%]" src={item.thumbnailUrl} alt={item.title} />) :'Loading...'}
    </div>
  )
}

export default trackWindowScroll(Lazy);