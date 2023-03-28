import React from 'react'
export default function ImageSearch({photos}) {  
  if(photos){
    return (
      <div>
         <div id='images'>{
           photos.map(photo => {          
             return <img className='div-images' src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt="" key={photo.id} />
            })
          }
         </div>
      </div>
    )
  }
 
}

