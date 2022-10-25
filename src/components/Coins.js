import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import {Link} from 'react-router-dom'

import './Coins.css'

const coins = (props) => {
    return (
        <div className='container'>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>coin</p>
                <p>Price</p>
                <p>24h</p>
                <p>Volume</p>
                <p>mkt cap</p>
            </div>

            {props.coins.map(coins => {
                return (
                <Link to={`/coin/${coins.id}`} element={<Coin/>} key={coins.id}>
                    <CoinItem coins={coins}/>
                </Link>
                )
            })}

        </div>
    )
}

export default coins