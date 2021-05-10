import {Box, Flex, Text, Image} from '@chakra-ui/react';
import {Link} from 'react-router-dom'

function MyLayout (props){
    return (
        <Box w = "100vw"  minH="100vh" bg="white">
            <Flex marginLeft="80px" marginTop = "20px" direction = "row">
                <Image  src = "../logo.svg" w="50px" h="50px"/>
                <Text marginTop="10px" marginLeft="50px" fontWeight = "bold" fontSize="2xl">EV Masonry</Text>
            </Flex>
            <Flex p = "30px" w ="100%">
                <Box flex={1}>
                    <Link to ="/">
                        <Text textAlign="center">Home</Text>
                    </Link>
                </Box>
                <Box flex={1}>
                    <Link to ="/about">
                        <Text textAlign="center"flex = {1}>About</Text>
                    </Link>
                </Box>
                <Box flex={1}>
                    <Link  to ="/contact">
                        <Text textAlign="center"flex = {1}>Contact</Text>
                    </Link>   
                </Box>
            </Flex>
            {props.children}
        </Box>
    );
}
export default MyLayout;