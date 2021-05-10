import React from 'react';
import {Box, Text} from '@chakra-ui/react';
import MyLayout from './MyLayout';
class Home extends React.Component{
    render(){
        return(
            <MyLayout>
                <Text textAlign="center">
                    Welcome
                </Text>
            </MyLayout>
        )
    }
}

export default Home;