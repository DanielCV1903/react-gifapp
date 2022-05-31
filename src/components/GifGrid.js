
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    //const [imgs,setImgs] = useState([]);
    const { data, loading } = useFetchGifs(category);

    return (
        <>
        <h3>{category}</h3>
        { <div className='cardGrid'>

           { 
           data.map( (img) => (
                <GifGridItem 
                    key={img.id}
                    {...img}/>
            ))
            }
        </div>}
        </>
    )
};