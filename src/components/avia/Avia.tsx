import React, { useEffect, useState } from 'react';
import { DatePicker } from 'antd'; 
import type { DatePickerProps } from 'antd';
import 'antd/dist/antd.min.css';
import { Link } from 'react-router-dom';
import './Avia.scss';

type IAvia = {
    setFindInfo: (a: {
        from: string,
        to: string,
        dateStart: string,
        dateFinish: string,
    }) => void
};

const Avia:React.FC<IAvia> = ({setFindInfo}) => {
    const [from, setFrom] = useState<string>('')
    const [to, setTo] = useState<string>('')
    const [dateStart, setDateStart] = useState<string>('')
    const [dateFinish, setDateFinish] = useState<string>('')
    const [disabledBtn, setDisabledBtn] = useState<boolean>(true)

    useEffect(() => {
        if(from && to && dateStart) {
            setDisabledBtn(false)
        }
        else setDisabledBtn(true)
    }, [from,to,dateStart])
    const onChangeText = (text: string, check: string) => {
        const onlyText = text.replace(/[^а-яА-Яa-zA-Z]/g, '')
        if(check === 'from') {
            setFrom(onlyText) 
        } else {
            setTo(onlyText) }}
    
    const onChangeDateStart: DatePickerProps['onChange'] = (date) => {
       date && setDateStart(date.format('DD.MM.YYYY'))
       date === null && setDateStart('')}

    const onChangeDateFinish: DatePickerProps['onChange'] = (date) => {
        date && setDateFinish(date.format('DD.MM.YYYY'))
        date === null && setDateFinish('')}
    
        const clickToFinder = () => {
            setFindInfo({
                from,
                to,
                dateStart,
                dateFinish
            })
        }



    return (
    <div className='avia'>
        <div className='inputBlock'>
            <div className="inputBox">
                 <span className='inputBox-span'>Откуда</span>
                 <input type='text' placeholder='Город вылета' className='inputBox-input'  onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeText(e.target.value, 'from')} 
                 value={from} /> 
            </div>
            <div className="inputBox">
                <span className='inputBox-span'>Куда</span>
                <input type='text' placeholder='Город прилета' className='inputBox-input'  onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeText(e.target.value, 'to')}
                  value={to} /> 
            </div>
            <div className="inputBox">
                 <span className='inputBox-span'>Туда</span>
                 <DatePicker onChange={onChangeDateStart}  placeholder='дд-мм-гггг' format='DD/MM/YYYY'/>
            </div>
            <div className="inputBox">
                <span className='inputBox-span'>Обратно</span>
               <DatePicker onChange={onChangeDateFinish}   placeholder='дд-мм-гггг' format='DD/MM/YYYY' />
            </div>
        </div>
        <div className='avia-btn'>
        <button type='button' style={disabledBtn ? {background: 'grey'} : {}} onClick={clickToFinder} disabled={disabledBtn}>
            {disabledBtn ? 
            <span>Найти билеты</span>:
            <Link to="/avia/info">Найти билеты</Link>
        }
           
        </button>

        </div>
    </div>
    )
}

export default Avia;