import React from 'react';
import ReactDOM from 'react-dom';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import imageplaceholder from '../components/images/imageplaceholder.png';
import babyJenni from '../components/images/babyJenni.png';
import youthAl from '../components/images/youthAl.png';

const YouthList2 = [
    {

        title: 'Allen Vest',
        subtitle: 'Year',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        title: 'Allen Vest',
        subtitle: 'Year',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        title: 'Allen Vest',
        subtitle: 'Year',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        title: 'Allen Vest',
        subtitle: 'Year',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    }
];
const YouthList = [
    {

        title: 'Jenni Gloyd',
        subtitle: 'Year',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        title: 'Jenni Gloyd',
        subtitle: 'Year',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        title: 'Jenni Stecher',
        subtitle: 'Year',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    },
    {
        title: 'Jenni Espy',
        subtitle: 'Year',
        text: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
    }
];

const Young = () => {
    const images = require('../components/images/imageplaceholder.png');
    const JenImage = require('../components/images/babyJenni.png');
    const AlImage = require('../components/images/youthAl.png');
    return (
        <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-end', width: '50%', textAlign: 'center' }}>
                <h1 style={{ alignSelf: 'flex-start', width: '100%' }}>Little Allen</h1>
                <CardText style={{ alignSelf: 'flex-start', width: '30%' }}>
                    A little bit about Al as a youngster...
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</CardText>
                <Card style={{ display: 'flex', justifyContent: 'center', border: '2px solid black', width: '30%', margin: '3%' }}>
                    <CardImg top width="100%" src={AlImage} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>
                            Allen Vest
                    </CardTitle>
                        <CardSubtitle>
                            1986
                    </CardSubtitle>
                        <CardText>
                            Free Will Baptist Youth Camp
                            in Niangua, MO (DeSoto, MO cabin)
                            Left to Right: Ryan, Allen
                    </CardText>
                    </CardBody>
                </Card>
                {YouthList2.map(young => {
                    return (
                        <Card style={{ display: 'flex', justifyContent: 'center', border: '2px solid black', width: '30%', margin: '3%' }}>
                            <CardImg top width="100%" src={images} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>
                                    {young.title}
                                </CardTitle>
                                <CardSubtitle>
                                    {young.subtitle}
                                </CardSubtitle>
                                <CardText>
                                    {young.text}
                                </CardText>
                            </CardBody>
                        </Card>
                    );
                })};
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-end', width: '50%', textAlign: 'center', borderLeft: '5px ridge #ebcb7a' }}>
                <h1 style={{ alignSelf: 'flex-start', width: '100%' }}>Little Jenni</h1>
                <CardText style={{ alignSelf: 'flex-start', width: '30%' }}>
                    A little bit about Jenni as a youngster...
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</CardText>
                <Card style={{ display: 'flex', justifyContent: 'center', border: '2px solid black', width: '30%', margin: '3%' }}>
                    <CardImg top width="100%" src={JenImage} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>
                            Jenni Gloyd
                </CardTitle>
                        <CardSubtitle>
                            1980
                </CardSubtitle>
                        <CardText>
                            Left to Right: Carrie (sister), Jenni, Amy Suhr (cousin)
                </CardText>
                    </CardBody>
                </Card>
                {YouthList.map(young => {
                    return (
                        <Card style={{ display: 'flex', justifyContent: 'center', border: '2px solid black', width: '30%', margin: '3%' }}>
                            <CardImg top width="100%" src={images} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>
                                    {young.title}
                                </CardTitle>
                                <CardSubtitle>
                                    {young.subtitle}
                                </CardSubtitle>
                                <CardText>
                                    {young.text}
                                </CardText>
                            </CardBody>
                        </Card>
                    );
                })};

                </div>
        </div>
    );
};

export default Young;