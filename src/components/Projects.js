import React from 'react';
import {Box, Image,Breadcrumb,SlideFade} from '@chakra-ui/react';
import MyLayout from './MyLayout';
import Slideshow from './Slideshow';
import AnimatedImage from './AnimatedImage';
class Home extends React.Component{
    render(){
        return(
            <MyLayout>
                <Slideshow title = "Stonework"/>
                <Slideshow title = "Concrete"/>
                <Slideshow title = "Firepits"/>
            </MyLayout>
        )
    }
}

export default Home;