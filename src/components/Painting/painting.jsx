import s from './Painting.module.css'
    import PropTypes from 'prop-types';
    export const Painting = ({id, title, url, quantity, price, author}) => {
    return(
        <li className={s.list}  key={id}>  
        <div className={s.paintingdiv}>
        <img className={s.img} src={url} alt="" width="480" />
        <h2 className={s.title}>{title}</h2>
        <p className={s.discription}>Автор: <a href={author.tag}></a></p>
        <p className={s.discription}>Ціна: {price} грн</p>
        <p className={s.discription}>Доступність: {quantity < 5 ? 'закінчується' :` є в наявності ${quantity}`}  </p>
        <button className={s.button} type="button">Додати в кошик</button>
      </div>
      </li>)
    
}

Painting.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    author: PropTypes.object
}