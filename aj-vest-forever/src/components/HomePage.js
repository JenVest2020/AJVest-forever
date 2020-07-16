import React from 'react';
import ReactDOM from 'react-dom';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import Slideshow from './Slideshow';



const HomePage = () => {

    return (
        <div style={{ display: 'flex', margin: '0 auto', width: '80%', backgroundImage: 'linear-gradient( green, black, blue)' }}>
            <Card style={{ display: 'flex', justifyContent: 'center', border: '2px solid black', width: '40%', margin: '0 auto' }}>
                <Slideshow />
                <CardBody className='text-center'>
                    <CardText>Click the navigation bar to read our love story</CardText>
                </CardBody>
            </Card>
        </div>
    )
};

export default HomePage;