import React from 'react';
import {Box, Image,Text,Button} from '@chakra-ui/react';
import MyLayout from './MyLayout';
import Slideshow from './Slideshow';
import {Link} from 'react-router-dom'
class Home extends React.Component{
    render(){
        return(
            <MyLayout>
                <Box position = "relative" h = "100vh">
                    <Box position = "absolute" left = "50%" top = "50%" marginLeft="-150px" marginTop="-150px" width = "300px" height = "300px" alignSelf="center" zIndex={2} textColor="white" fontSize="60px" fontWeight="600">
                        EV Masonry
                    </Box>
                    <Image h = "100%" w = "100%" objectFit = "cover" src = "/images/outdoor5.jpg"/>
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
                    <Link to = "/about">
                        <Button variant="outline" alignSelf="end"> Learn more about us here!</Button>  
                    </Link> 
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
                    <Slideshow/>
                    <Link to = "/projects">
                        <Button variant="outline" alignSelf="end"> Check out our projects!</Button>
                    </Link>
                </Box>
                
            </MyLayout>
        )
    }
}

export default Home;