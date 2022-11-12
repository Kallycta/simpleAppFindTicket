import React, { useState } from 'react';

import AviaInfoFooter from '../aviaInfoFooter/AviaInfoFooter';

import logo  from '../../icons/shema.png';
import bag  from '../../icons/bag.png';
import s7  from '../../icons/s7.png';
import s7logo  from '../../icons/s7logo.png';

import './AviaInfo.scss'; 

type IAviaInfo = {
    findInfo: {
        from: string,
        dateStart: string,
        to: string,
        dateFinish: string
    }
};

const AviaInfo:React.FC<IAviaInfo> = ({findInfo}) => {

    const [timeDeparture, setTimeDeparture] = useState('09:20')
    const [timeArrive, setTimeArrive] = useState('11-05')
    const [timeDepartureDown, setTimeDepartureSecondDown] = useState('09:20')
    const [timeArriveDown, setTimeArriveDown] = useState('11-05')

    return (
        <div>
            <div className="containerAviaInfo">
                <div className="containerAviaInfo-child">
                <div className="boxAviaInfo">
                   <span className="boxAviaInfo-header">Невозвратный</span>
                    <div className="boxAviaInfo-main">
                        <div className="boxAviaInfo-img">
                            <img src={s7logo} alt="s7" />
                            <img src={s7} alt="s7" />
                        
                        </div>
                        <div className="boxAviaInfo-main__date">
                            <div className='boxAviaInfo-main__time'>{timeDeparture}</div> 
                            <div>
                                <span className='boxAviaInfo-main__city'>{findInfo.from}</span> 
                                <br/> 
                                <span>{findInfo.dateStart}</span>  
                            </div>
                        </div>
                        <div className="boxAviaInfo-main__line">
                            <img src={logo} alt="line" />
                        </div>
                        <div className="boxAviaInfo-main__date">
                            <div className='boxAviaInfo-main__time'>{timeArrive}</div>
                            <div>
                                <span className='boxAviaInfo-main__city'>{findInfo.to}</span> 
                                <br/> 
                                <span>{findInfo.dateStart}</span>  
                            </div>
                        </div>
                        <div className="boxAviaInfo-main__bag">
                            <img src={bag} alt="bag" />
                        </div>

                    </div>
                        <AviaInfoFooter setTimeDeparture={setTimeDeparture} setTimeArrive={setTimeArrive} />
                   </div>
                  
               {findInfo.dateFinish && 
                    <div className="boxAviaInfo">
                    <div style={{display: 'flex'}}>
                    <span className="boxAviaInfo-header">Невозвратный</span><span className='boxAviaInfo-header__line'></span>
                    </div>
                    <div className="boxAviaInfo-main">
                        <div className="boxAviaInfo-img">
                            <img src={s7logo} alt="s7" />
                            <img src={s7} alt="s7" />
                        
                        </div>
                        <div className="boxAviaInfo-main__date">
                            <div className='boxAviaInfo-main__time'>{timeDepartureDown}</div>
                            <div>
                                <span className='boxAviaInfo-main__city'>{findInfo.to}</span> 
                                <br/> 
                                <span >{findInfo.dateFinish}</span>  
                            </div>
                        </div>
                        <div className="boxAviaInfo-main__line">
                            <img src={logo} alt="line" />
                        </div>
                        <div className="boxAviaInfo-main__date">
                            <div className='boxAviaInfo-main__time'>{timeArriveDown}</div>
                            <div>
                                <span className='boxAviaInfo-main__city'>{findInfo.from}</span> 
                                <br/> 
                                <span >{findInfo.dateFinish}</span>  
                            </div>
                        </div>
                        <div className="boxAviaInfo-main__bag">
                            <img src={bag} alt="bag" />
                        </div>

                    </div>
                    <AviaInfoFooter setTimeDeparture={setTimeDepartureSecondDown} setTimeArrive={setTimeArriveDown} />
                    </div> } 
                </div>
                <div className="containerAviaInfo-sum"> {findInfo.dateFinish ? '9 300 P' : '4 150 Р'}</div>
            </div>
        </div>
    )
} 

export default AviaInfo;

