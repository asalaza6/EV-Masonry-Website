import React from 'react';
import {Text} from '@chakra-ui/react';
import MyLayout from './MyLayout';
class Contact extends React.Component{
    render(){
        return(
            <MyLayout>
                <Text textAlign="center">
                    Contact Us
                </Text>
            </MyLayout>
        )
    }
}

export default Contact;