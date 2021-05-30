import React from 'react';
import {Box, Button,Text,Image,Flex,SlideFade, AspectRatio} from '@chakra-ui/react';
const slideImages = [
    {image: '../image1.jpg',
    desc: 'desc1'},
    {image: '../image2.jpg',
    desc: 'desc here1'},
    {image: '../image3.jpg',
    desc: 'desc here2'},
    {image: '../image4.jpg',
    desc: 'desc here3'},
    {image: '../image5.jpg',
    desc: 'desc here4'}
];


class Slideshow extends React.Component {
    constructor(props){
      super(props);
      this.onNext = this.onNext.bind(this);
      this.onPrev = this.onPrev.bind(this);
      this.state = {
          position: 2,
          length: slideImages.length,
          changed: false,
          selected: false,
          slideOpen:true,
          direction:true
      }
      this.interval = null;
      this.imageClick = this.imageClick.bind(this);
      this.startInterval = this.startInterval.bind(this);
      this.stopInterval = this.stopInterval.bind(this);
    }
    imageClick(){
      this.stopInterval();
      this.setState({selected: true});
    }
    onNext(){
      this.setState({direction:false});
      this.setState({slideOpen:false});
      setTimeout(()=>{this.setState({direction:true,changed: true,position:((this.state.position + 1)%this.state.length)});}, 
        100);
      
      setTimeout(()=>{this.setState({slideOpen:true,direction:true});}, 
        200);
    }
    onPrev(){
      this.setState({slideOpen:false});
      setTimeout(()=>{this.setState({direction:false,changed: true,position:(this.state.position == 0 ? this.state.length-1: this.state.position-1)});}, 
        100);
      
      setTimeout(()=>{this.setState({slideOpen:true,direction:true});}, 
        200);
      this.setState({direction:true});
      this.setState({});
    }
    startInterval(){
      this.interval = setInterval(() => {
        if(this.state.changed){
          this.setState({changed: false});
        }else{
            this.onNext();
        }}, 3500);
    }
    stopInterval(){
      clearInterval(this.interval);
    }
    componentDidMount(){
      setTimeout(this.startInterval,Math.floor(Math.random()*3500))
    }
    componentWillUnmount(){
      this.stopInterval();
    }
  
    render(){
      return (
          <Box maxW="500px">
            <Text fontWeight = "bold">{this.props.title||""}</Text>
            <Flex w = "100%">
                <Flex padding = "10px" flex = {1}  onClick = {this.onPrev}>
                    <Image src = "/left-arrow.svg"/>
                </Flex>
                <AspectRatio ratio = {3/2} flex = {20} className = "slideImage">
                  <SlideFade offsetX={this.state.direction?"50px":"-50px"} in = {this.state.slideOpen}>
                      <Image w = "100%" src = {slideImages[this.state.position].image}/>
                  </SlideFade>
                </AspectRatio>
                
                <Flex padding = "10px" flex = {1} onClick = {this.onNext}>
                    <Image src = "/right-arrow.svg"/>
                </Flex>
            </Flex>
            <Text fontSize="xs">{slideImages[this.state.position].desc}</Text>
          </Box>
      )
    }
  }
  
  export default Slideshow;