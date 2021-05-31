import React from 'react';
import {Box, Text,Image,Flex,SlideFade, AspectRatio} from '@chakra-ui/react';
const slideImages = {
  main:[
    {image: '/images/brick3.jpg',
    desc: 'Tall painted brick wall'},
    {image: '/images/fireplace1.jpg',
    desc: 'Beautiful stone fireplace'},
    {image: '/images/outdoor3.jpg',
    desc: 'Beautiful fireplace'},
    {image: '/images/outdoor5.jpg',
    desc: 'Outdoor fireplace'},
    {image: '/images/privacy1.jpg',
    desc: 'Beautiful Privacy Wall'}
  ],
  outdoor:[
    {image: '/images/outdoor1.jpg',
    desc: 'Outdoor island'},
    {image: '/images/outdoor2.jpg',
    desc: 'Outdoor fireplace'},
    {image: '/images/outdoor3.jpg',
    desc: 'Outdoor fireplace'},
    {image: '/images/outdoor4.jpg',
    desc: 'Outdoor Island'},
    {image: '/images/outdoor5.jpg',
    desc: 'Outdoor Patio Design'},
    {image: '/images/outdoor6.jpg',
    desc: 'Concrete Table and Seat'},
    {image: '/images/outdoor7.jpg',
    desc: 'Outdoor grill area'},
    {image: '/images/outdoor8.jpg',
    desc: 'Outdoor Patio'}
  ],
  brick: [
    {image: '/images/brick1.jpg',
    desc: 'Brick containing wall'},
    {image: '/images/brick2.jpg',
    desc: 'Brick containing wall'},
    {image: '/images/brick3.jpg',
    desc: 'Tall painted brick wall'},
    {image: '/images/brick4.jpg',
    desc: 'Tall brick wall'},
    {image: '/images/brick5.jpg',
    desc: 'Tall painted brick wall'}
  ],
  misc: [
    {image: '/images/privacy1.jpg',
    desc: 'Beautiful Privacy Wall'},
    {image: '/images/fireplace1.jpg',
    desc: 'Beautiful stone fireplace'}
  ]
};


class Slideshow extends React.Component {
    constructor(props){
      super(props);
      this.onNext = this.onNext.bind(this);
      this.onPrev = this.onPrev.bind(this);
      this.state = {
        position: 0,
        images: this.props.images || "misc",
        length: slideImages[this.props.images || "misc"].length,
        changed: false,
        selected: false,
        slideOpen:true,
        direction:true
      }
      // console.log(this.state)
      this.interval = null;
      this.timeout = null;
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
      setTimeout(()=>{this.setState({direction:false,changed: true,position:(this.state.position === 0 ? this.state.length-1: this.state.position-1)});}, 
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
      this.timeout = setTimeout(this.startInterval,Math.floor(Math.random()*3500))
    }
    componentWillUnmount(){
      this.stopInterval();
      clearTimeout(this.timeout);
    }
  
    render(){
      return (
          <Box maxW="500px" paddingY="15px">
            <Text fontWeight = "bold">{this.props.title||""}</Text>
            <Flex w = "100%">
                <Flex padding = "10px" flex = {1}  onClick = {this.onPrev}>
                    <Image src = "/left-arrow.svg"/>
                </Flex>
                <AspectRatio ratio = {3/2} flex = {20} className = "slideImage">
                  <SlideFade offsetX={this.state.direction?"50px":"-50px"} in = {this.state.slideOpen}>
                      <Image w = "100%" src = {slideImages[this.state.images][this.state.position].image}/>
                  </SlideFade>
                </AspectRatio>
                
                <Flex padding = "10px" flex = {1} onClick = {this.onNext}>
                    <Image src = "/right-arrow.svg"/>
                </Flex>
            </Flex>
            <Text fontSize="xs">{slideImages[this.state.images][this.state.position].desc}</Text>
          </Box>
      )
    }
  }
  
  export default Slideshow;