import style from './CardSell2.module.css'
import Topic from '../topic/Topic'

function CardSell2({title,yesSrc,yesSrc2,yesSrc3,yesSrc4,price,colorBotton}){
    return(
        <div className={style.principal}>
            <h1 className={style.title}>{title}</h1>
            <div className={style.topics}>
                <Topic imgSrc={yesSrc} text='PNG Templates'></Topic>
                <Topic imgSrc={yesSrc2} text='Figma Responsive Components'></Topic>
                <Topic imgSrc={yesSrc3} text='Constant Updates'></Topic>
                <Topic imgSrc={yesSrc4} text='Custom Tamplates'></Topic>
            </div>
            <div className={style.prices}>
                <h1 className={style.price}>{price}</h1>
                <p className={style.textprice}>Per month</p>
            </div>

            <div className={style.botton} style={{backgroundColor:colorBotton}}>Try Now</div>
            
        </div>
    )
}

export default CardSell2