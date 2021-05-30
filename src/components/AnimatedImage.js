import {Box, Flex, Text, Image, IconButton, Icon} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';
function MyLayout (props){
    var [imageMargin,setMargin] = useState(1.0);
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


    const offset = 20;

    useEffect(()=>{
        let timeoutId = null;
        //listener fcntion
        const resizeListener = () => {
            
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;  
            if(scrollTop>height){
                return;
            }
            setMargin(scrollTop/height)
            console.log("scroll",scrollTop,height);
        }
        //create listener
        window.addEventListener('scroll',resizeListener);

        //clean up
        return () => {
            window.removeEventListener('scroll',resizeListener);
        }
    },[]);
    return (
        <Flex direction="column" h = "95vh" border = "1pt black solid">
            <Image objectPosition="0px 40px" objectFit="cover" h = "120%"  src="/image1.jpg"/>
            {/* <Image marginTop = {(-offset).toString()+"%"} objectFit="cover" h = {(100+offset).toString()+"%"} minW="100%" src="/image1.jpg"/> */}
        </Flex>
    );
}
export default MyLayout;