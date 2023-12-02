import PropTypes from 'prop-types'
import { Painting } from "../Painting/painting"
export function PaintingList({painting}){
   
    return(
      <ul>
        {painting.map(({id, title, url, quantity, price, author})=>(
         <Painting  
            key={id}
            title={title}
            url={url}
            quantity={quantity}
            price={price}
            author={author}
            />
        ))
            

        }
      </ul>
    )
}

PaintingList.propTypes = {
    painting: PropTypes.array,
}