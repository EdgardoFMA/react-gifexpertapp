
import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categorias = ['One Punch', 'Naruto', 'Dragon Ball' ]
    const [categories, setCategories] = useState(['Dragon Ball Z']);
    
    //const handleAdd = () => {
        //setCategories([...categories, 'One Punch'])

    //}

  return (
    <>  
        <h2>Hoy Presentamos</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        <ol>    
        {
            categories.map( category =>
                 <GifGrid 
                    key={category}
                    category = {category} />
                 )
        }
        </ol>
    </>
  )
}


 




