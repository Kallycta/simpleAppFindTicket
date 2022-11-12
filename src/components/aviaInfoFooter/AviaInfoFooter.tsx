import  { useState } from 'react';
import classnames from 'classnames';

type IAviaInfoFooter = {
    setTimeDeparture: (a: string) => void,
    setTimeArrive: (a: string) => void
};

const AviaInfoFooter:React.FC<IAviaInfoFooter> = ({setTimeDeparture,setTimeArrive}) => {

    const [first, setFirst] = useState({
        startTime: '09:20',
        finishTime: '11:05',
        active: true
    })
    const [second, setSecond] = useState({
        startTime: '10:20',
        finishTime: '12:05',
        active: false,
    })
    const [third, setThird] = useState({
        startTime: '11:20',
        finishTime: '13:05',
        active: false
})

    const clickChoseTime = (info: string) => {
        switch (info) {
            case 'first': 
                setFirst({...first, active: true})
                setSecond({...second, active: false})
                setThird({...third, active: false})
                setTimeDeparture('09:20')
                setTimeArrive('11:05')

            break;
            case 'second': 
                setFirst({...first, active: false})
                setSecond({...second, active: true})
                setThird({...third, active: false})
                setTimeDeparture('10:20')
                setTimeArrive('12:05')
            break;
            case 'third' : 
                setFirst({...first, active: false})
                setSecond({...second, active: false})
                setThird({...third, active: true})
                setTimeDeparture('11:20')
                setTimeArrive('13:05')
            break;
        } }

        const firstClass = classnames({
            'boxAviaInfo-footer__time': true,
            'active': first.active
        })
        const secondClass = classnames({
            'boxAviaInfo-footer__time': true,
            'active': second.active
        })
        const thirdClass = classnames({
            'boxAviaInfo-footer__time': true,
            'active': third.active
        })

    return (
        <div className="boxAviaInfo-footer">
        <div className={firstClass}   onClick={() => clickChoseTime('first')}>{`${first.startTime} - ${first.finishTime}`}</div>
        <div className={secondClass} onClick={() => clickChoseTime('second')} >{`${second.startTime} - ${second.finishTime}`}</div>
        <div className={thirdClass} onClick={() => clickChoseTime('third')}>{`${third.startTime} - ${third.finishTime}`}</div>
    </div>
    )
}

export default AviaInfoFooter;