import React from 'react';


const Reconnecting = () => {
    const trade1 = require('./images/newJobBurnPile092718.jpg');
    const firstImage = require('./images/walkInAl091818.jpg');
    const AP1 = require('./images/AntiochParkBenchPrayer091718.jpg');
    const loveDay = require('./images/FirstVday2019.jpg');
    const NYday = require('./images/VchatNYday2019.jpg');
    const pHimage = require('./images/imageplaceholder.png');
    return (
        <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '45%', textAlign: 'center', margin: '2%' }}>
                <h2>We Traded Pictures on FaceBook</h2>
                <h3>Aug & Sept, 2018</h3>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <img style={{ width: '25%' }} src={trade1} alt='' />
                    <img style={{ width: '25%' }} src={pHimage} alt='' />
                    <img style={{ width: '25%' }} src={pHimage} alt='' />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '45%', textAlign: 'center' }}>
                <h2>Al's First Visit to Jenni in KC </h2>
                <h3>Sept, 2018</h3>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <img style={{ width: '25%' }} src={firstImage} alt='' />
                    <img style={{ width: '25%' }} src={pHimage} alt='' />
                    <img style={{ width: '25%' }} src={pHimage} alt='' />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '45%', textAlign: 'center', margin: '2%' }}>
                <h2>We Visit Antioch Park in KC</h2>
                <h3>Sept, 2018</h3>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <img style={{ width: '25%' }} src={AP1} alt='' />
                    <img style={{ width: '25%' }} src={pHimage} alt='' />
                    <img style={{ width: '25%' }} src={pHimage} alt='' />
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '45%', textAlign: 'center' }}>
                <h2>Other Firsts</h2>
                <h3>2019</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                    <img style={{ width: '30%' }} src={loveDay} alt='' />

                    <img style={{ width: '30%' }} src={NYday} alt='' />
                    <img style={{ width: '30%' }} src={pHimage} alt='' />
                </div>
                <p> 1. Love Day video chat in 2019</p>
                <p>2. New Year's after midnight video chat</p>
            </div>
        </div>

    );
};

export default Reconnecting;