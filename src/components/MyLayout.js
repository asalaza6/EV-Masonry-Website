import {Box, Flex, Text, Button, Slide, Image, IconButton} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';
function MyLayout (props){
    const mobileSize = 500;
    let [development, toggleDev] = useState(true);
    let [menu, toggleMenu] = useState(false);
    let [mobile, setMobile] = useState(()=>{
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if(width > mobileSize){
            return false;
        }else{
            return true;
        }
    });

    useEffect(()=>{
        let timeoutId = null;
        //listener fcntion
        const resizeListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(()=>{
                console.log("resize");
                var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                setMobile(width <= mobileSize);
            },150);
        }
        //create listener
        window.addEventListener('resize',resizeListener);

        //clean up
        return () => {
            window.removeEventListener('resize',resizeListener);
        }
    },[]);
    return (
        <Box display="flex" flexDirection="column" justifyContent="space-between" align="center" minH="100vh" bg="white">
            <Slide style={{ zIndex: 10 }} in = {development}>
                <Flex bg = "whiteAlpha.800" w = "100%" h = "100%" justify="center" alignItems="center">
                    <Box >
                        <Text>Website is in Development</Text>
                        <Text>Press OK to continue!</Text>
                        <Button onClick={()=>{toggleDev(false)}}>OK</Button>
                    </Box>
                </Flex>
            </Slide>
            <Box p = "10px"  shadow="md" w ="100%">
                <Flex maxW = "800px" justify= "space-between">
                    <Flex align = "center"  direction = "column">
                        <Image  src = "../logo.svg" w="45px" h="45px"/>
                        <Text   fontWeight = "bold" fontSize="x-small">EV Masonry</Text>
                    </Flex>

                    {mobile?
                        <Flex  align = "center">
                            <IconButton
                                onClick={()=>{toggleMenu(!menu)}}
                                icon = {<HamburgerIcon/>}/>
                        </Flex>:
                        <Flex w = "400px" >
                            <Flex justify="center" align = "center" flex={1}>
                                <Link to = "/">
                                        <Text fontSize="md">Home</Text>  
                                </Link>
                            </Flex>
                            <Flex justify="center" align = "center" flex={1}>
                                <Link to = "/about">
                                        <Text fontSize="md">About</Text>  
                                </Link>
                            </Flex>
                            <Flex justify="center" align = "center" flex={1}>
                                <Link to = "/projects">
                                        <Text fontSize="md">Projects</Text>  
                                </Link>
                            </Flex>
                            <Flex justify="center" align = "center" flex={1}>
                                <Link to = "/contact">
                                        <Text fontSize="md">Contact</Text>  
                                </Link>
                            </Flex>
                        </Flex>
                    }
                </Flex>
                {(mobile && menu)?
                    <Flex direction = "column">
                        <Link to = "/">
                            <Text shadow = "base" fontSize="md">Home</Text>  
                        </Link>
                        <Link to = "/about">
                            <Text shadow = "base" fontSize="md">About</Text>  
                        </Link>
                        <Link to = "/projects">
                            <Text fontSize="md">Projects</Text>  
                        </Link>
                        <Link to = "/contact">
                            <Text shadow = "base" fontSize="md">Contact</Text>  
                        </Link>
                    </Flex>:null}
            </Box>
            <Box>
                {props.children}
            </Box>  
            <Box bg = "gray.200" p = "10px" w ="100%">
                <Flex maxW="800px" direction = "row" >
                    <Flex flex = {1}  direction = "column">
                        
                        <Text fontSize = "md" paddingBottom="10px" fontWeight = "600">Services We Offer!</Text>
                        
                        <Text fontSize = "small">Fireplaces</Text>
                        <Text fontSize = "small">Concrete</Text>
                        <Text fontSize = "small">Brick</Text>
                        <Text fontSize = "small">Stonework</Text>
                        
                    </Flex>
                    <Flex flex = {1}  direction = "column">
                        <Text fontSize = "md" paddingBottom="10px" fontWeight = "600">Pages</Text>
                        <Flex justify="center" align = "center" flex={1}>
                            <Link to = "/">
                                <Text fontSize="small">Home</Text>  
                            </Link>
                        </Flex>
                        <Flex justify="center" align = "center" flex={1}>
                            <Link to = "/about">
                                <Text fontSize="small">About</Text>  
                            </Link>
                        </Flex>
                        <Flex justify="center" align = "center" flex={1}>
                            <Link to = "/projects">
                                <Text fontSize="small">Projects</Text>  
                            </Link>
                        </Flex>
                        <Flex justify="center" align = "center" flex={1}>
                            <Link to = "/contact">
                                    <Text fontSize="small">Contact</Text>  
                            </Link>
                        </Flex>
                    </Flex>
                    <Flex   flex = {1} direction = "column">
                        <Text fontSize = "md" paddingBottom="10px" fontWeight = "600">Contact</Text>
                        <Text fontSize = "small">EV Masonry</Text>
                        <Text fontSize = "small">Street Address</Text>
                        <Text fontSize = "small">Desert Hot Springs, Ca 92240</Text>
                        <Text fontSize = "small">(760)-XXX-XXXX</Text>
                    </Flex>
                </Flex>
                <Text p ="20px" fontSize = "small">Copyright © 2021 EV Masonry</Text>
            </Box>
        </Box>
    );
}
export default MyLayout;