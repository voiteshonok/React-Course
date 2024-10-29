import './Card.css'

export function Card(props) {
    return (
        <div className='card'>
            <img className='card__img' src={props.img} alt='img' />
            <div className='card__description'>
                <div className='card__description__header'>
                    <div className='card__description__header__title'>{props.title}</div>
                    <div className='card__description__header__price'>{props.price}</div>
                </div>
                <div>{props.descriprion}</div>

                <div className='card__description__buttons'>
                    <input className='card__input' type="text" value='1' maxlength="2" size="1" />
                    <button className='add_button'>Add to cart</button>
                </div> 
            </div>
        </div>
    )
}