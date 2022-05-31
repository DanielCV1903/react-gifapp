export const GifGridItem = ( {title,url} ) => {

    return (
        <div>
            <img src={url} alt={title} className='card'>
            </img>
            <p>
            {title}  
            </p>
        
        </div>
    )
};