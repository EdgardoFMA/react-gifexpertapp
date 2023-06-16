import React from 'react';
import { UseFetchGifs } from '../Hooks/UseFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { data:images, loading } = UseFetchGifs(category)

  
  return (
    <>
      <h3> { category } </h3>

        {loading && <p>Perate p rctm </p> }

      <div className='card-grid'>
            {
              images.map ( img => (
                <GifGridItem
                  key={img.id}
                  {...img} 
                />
              ) )
            }
    </div>
  </>
  ) 
}


