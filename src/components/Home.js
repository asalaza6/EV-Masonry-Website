import React from 'react';
import {Box, Image,Text,Button} from '@chakra-ui/react';
import MyLayout from './MyLayout';
import Slideshow from './Slideshow';
import AnimatedImage from './AnimatedImage';
class Home extends React.Component{
    render(){
        return(
            <MyLayout>
                <Box position = "relative" h = "100vh">
                    <Box position = "absolute" left = "50%" top = "50%" marginLeft="-150px" marginTop="-150px" width = "300px" height = "300px" alignSelf="center" zIndex={2} textColor="white" fontSize="60px" fontWeight="600">
                        EV Masonry
                    </Box>
                    <Image h = "100%" w = "100%" objectFit = "cover" src = "/image6.jpg"/>
                </Box>
                <Text p = "10px" bg = "gray.200" fontSize="40px" fontWeight="600">
                    Who are we? 
                </Text>
                <Box maxW = "800px" p = "10px">
                    
                    <Text  p = "10px">
                        EV Masonry is a locally 
                        grown and independent run 
                        masonry business that brings 
                        high quality masonry designs 
                        to you in the Coachella Valley!
                    </Text>
                    
                    <Button variant="outline" alignSelf="end"
                        onClick={()=>{window.location = "/about"}}> Learn more about us here!</Button>
                </Box>
                <Text p = "10px" bg = "gray.200" fontSize="40px" fontWeight="600">
                Our projects 
                </Text>
                <Box maxW = "800px" p = "10px">
                    
                    <Text  p = "10px">
                    Our projects range from firepits, 
                        concrete, stonework, brick fences,
                        privacy fences and more!
                    </Text>
                    <Box position = "relative" >
                        <Slideshow/>
                        <Button shadow="lg" p = "30px" bg = "white"  h = "30px" position = "absolute" 
                            zIndex={1} bottom = {0} right = {0} variant="solid" alignSelf="end"
                            onClick={()=>{window.location = "/projects"}}> Check out our projects!</Button>
                    </Box>
                </Box>
                
            </MyLayout>
        )
    }
}

export default Home;