import painting from './painting.json'

const options = painting[0]
export function Painting(){
    return(
        <>
        {painting.map(option=> 
        <li key={option.id}>  <div>
            <img src="{options.url}" alt="" width="480" />
            <h2>{options.title}</h2>
            <p>Автор: <a href="">"{options.author.tag}"</a></p>
            <p>Ціна: {options.price} грн</p>
            <p>Доступність: {options.quantity < 5 ? 'закінчується' :` є в наявності ${option.quantity}`}  </p>
            <button type="button">Додати в кошик</button>
          </div>
          </li>)}
          </>
    )
}

