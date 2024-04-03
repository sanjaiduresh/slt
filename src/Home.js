import React from 'react'
import plusIcon from './img/plusIcon.png'
import searchIcon from './img/searchIcon.png'
import sltLogo from './img/sltLogo.png';
import diagonal from './img/diagonal.png';
import level from './img/level.png';

export default function Home() {
    return (
        <>
            <div className='home-header'><h1>Smart LPG Trolley</h1><img src={plusIcon} className='plusIcon' alt='plus icon' /></div>
            <div className='search'>
                <img src={searchIcon} className='searchIcon' alt='searchIcon' />
                <input type="text" placeholder="Search.." className='searchbar' />
            </div>
            <div className='buttons'>
                <button className="button-1" >All</button>
                <button className="button-2" >Weight</button>
                <button className="button-2" >Gas Log</button>
            </div>
            <div className='sltAccount'>
                <div className='sltAccount-header'>
                    <div className='slt'>SLT<span className='account'>Account</span>
                    </div>
                    <div className='date'>Date <span className='dates'>27-03-2024</span></div>
                </div>
                <div><img src={sltLogo} alt='sltlogo' /></div>
                <div >
                    <div className='battery'>
                    <div className='accName'>Acc name<span className='name'>Abishek B</span>
                    </div>
                    <div className='accId'>Acc I'd<span className='id'>102342</span>
                    </div>
                    <div><img src={diagonal} className='diagonal-img' alt='diagonal' />
                    </div>
                    <div className='level'><img src={level} className='level-img' alt='level' /></div>
        
                    </div>
                </div>
            </div>

        </>
    )
}
