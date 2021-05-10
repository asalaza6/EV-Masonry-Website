import React from 'react';
import {Text} from '@chakra-ui/react';
import MyLayout from './MyLayout';
class About extends React.Component{
    render(){
        return(
            <MyLayout>
                <Text textAlign="center">
                    About us!
                </Text>
            </MyLayout>
        )
    }
}

export default About;