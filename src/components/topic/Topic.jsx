import style from './Topic.module.css'

function Topic({imgSrc, alt, text}){
    return(
        <div className={style.geral}>
            <img className={style.img} src={imgSrc} alt={alt} />
            <p className={style.text}>{text}</p>
        </div>
    )
}

export default Topic