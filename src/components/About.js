import React from 'react';
import {Text,Box} from '@chakra-ui/react';
import MyLayout from './MyLayout';
class About extends React.Component{
    render(){
        return(
            <MyLayout>
                <Box maxW = "800px" p = "10px">
                    <Text fontSize="40px" fontWeight="600">
                        Who are we? 
                    </Text>
                    <Text>
                        EV Masonry is a locally 
                        grown and independent run 
                        masonry business that brings 
                        high quality masonry designs 
                        to you in the Coachella Valley!
                    </Text>
                </Box>
            </MyLayout>
        )
    }
}

export default About;