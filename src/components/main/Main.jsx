import style from './Main.module.css'
import CardSell from '../CardSell2/CardSell2.jsx';
import CarneImg from '../../assets/carne.png'
import correto from '../../assets/correct.png'
import errado from '../../assets/errado.png'


function Main(){
    return(
        <div className={style.geral}>
            <h1>Plans +</h1>
            <div className={style.group}>
                <CardSell title='FREE' price='$0' yesSrc={correto} yesSrc2={errado} yesSrc3={errado} yesSrc4={errado} colorBotton='red'></CardSell>
                <CardSell title='PREMIUM' price='$99' yesSrc={correto} yesSrc2={correto} yesSrc3={errado} yesSrc4={errado} colorBotton='red'></CardSell>
                <CardSell title='PRO' price='$199' yesSrc={correto} yesSrc2={correto} yesSrc3={correto} yesSrc4={correto} colorBotton='red'></CardSell>
            </div>
            <h1>New Member</h1>
            <div className={style.group}>
                <CardSell title='FREE' price='$0' yesSrc={correto} yesSrc2={errado} yesSrc3={errado} yesSrc4={errado} colorBotton='green'></CardSell>
                <CardSell title='PREMIUM' price='$199' yesSrc={correto} yesSrc2={correto} yesSrc3={errado} yesSrc4={errado} colorBotton='green'></CardSell>
                <CardSell title='PRO' price='$399' yesSrc={correto} yesSrc2={correto} yesSrc3={correto} yesSrc4={correto} colorBotton='green'></CardSell>
            </div>
        </div>
    )
}

export default Main