import React from 'react';
import MyLayout from './MyLayout';
import Slideshow from './Slideshow';
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