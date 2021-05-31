import React from 'react';
import MyLayout from './MyLayout';
import Slideshow from './Slideshow';
class Home extends React.Component{
    render(){
        return(
            <MyLayout>
                <Slideshow images="outdoor" title = "Outdoor"/>
                <Slideshow images="brick" title = "Brick"/>
                <Slideshow images="misc" title = "Lovely solutions"/>
            </MyLayout>
        )
    }
}

export default Home;