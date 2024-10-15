import './imageshow.css'
function Image({results}){
   const renderedimage=results.map((image)=>{
        return (
            <div  key={image.id}>
                <img  className="images" src={image.urls.small} 
                alt={image.alt_description}/>
            </div>
        )
   })
   return (
    <div className='img-container'>{renderedimage}</div>
   ) 
}

export default Image;