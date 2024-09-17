import style from './CardSell.module.css'
import sacola from '../../assets/sacola.png'

function CardSell({imgSrc,altText,title,desc,price}){
    return(
        <div className={style.card}>
            <div className={style.union}>
                <img className={style.image} src={imgSrc} alt={altText}></img>
                <div className={style.texts}>
                    <h1 className={style.title}>{title}</h1>
                    <p className={style.desc}>{desc}</p>
                    <p className={style.price}>{price}</p>
                </div>
            </div>

            <div className={style.bola}><img src={sacola}></img></div>
        </div>
    )
}

export default CardSell