import React from 'react';
import {Text,Input, InputGroup, InputLeftElement, Box} from '@chakra-ui/react';
import MyLayout from './MyLayout';
import {EmailIcon, PhoneIcon,Icon} from '@chakra-ui/icons';
import emailjs from 'emailjs-com';
import {FaRegUser} from 'react-icons/fa';
import {RiMessage3Fill} from 'react-icons/ri'
export default class Contact extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      phone: ""
    }
    this.sendEmail = this.sendEmail.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(evt,type){
    if(type === "name"){
      this.setState({"name":evt.target.value});
    }else if(type === "email"){
      this.setState({"email":evt.target.value});
    }else if(type === "message"){
      this.setState({"message":evt.target.value});
    }else if(type === "phone"){
        this.setState({"phone":evt.target.value});
    }
  }
  
  sendEmail(evt){
    evt.preventDefault();
    
    // console.log(evt.target);
    console.log("Message sent. Thank you!",process.env.REACT_APP_EMAILJS_SERVICE);
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
      evt.target,
      process.env.REACT_APP_EMAILJS_USER
      ).then((result) => {
        // console.log(result.text);
        alert("Message sent. Thank you!");
        window.location = ""
    }, (error) => {
        console.log(error.text);
    });
    return false;
  }
  render(){
    return (
      <MyLayout>
        <Text>Fill the form below and I will contact you as soon as possible.</Text>
        <Box maxW = '800px' p = "10px">
            <form name="contact" onSubmit = {evt =>{console.log("hello");return this.sendEmail(evt)}}>
                
                <InputGroup>
                    <InputLeftElement
                        children={<Icon as={FaRegUser} color="gray.300" />}
                        />
                    <Input isRequired name = "name" variant="flushed" placeholder="Name" onChange = {(evt)=>this.onChange(evt,"name")} type="text" />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement
                        children={<PhoneIcon color="gray.300" />}
                        />
                    <Input isRequired name = "phone" variant="flushed" type="number" placeholder="Phone number" onChange = {(evt)=>this.onChange(evt,"phone")}/>
                </InputGroup>
                
                <InputGroup>
                    <InputLeftElement
                        children={<EmailIcon color="gray.300" />}
                        />
                    <Input  isRequired name = "email" variant="flushed" placeholder="Email" onChange = {(evt)=>this.onChange(evt,"email")} type="email" />
                </InputGroup>
                
                <InputGroup>
                    <InputLeftElement
                        children={<Icon as={RiMessage3Fill} color="gray.300" />}
                        />
                    <Input  isRequired name = "message" variant="flushed" placeholder="Leave a message on why you're reaching out!" onChange = {(evt)=>this.onChange(evt,"message")} type="text" />
                </InputGroup>
                
                <Input w = "80px" type = "submit"/>
            </form>
        </Box>
      </MyLayout>
    )
  }
}

