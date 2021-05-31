import React,{useState} from 'react';
import {Text,Input, InputGroup, useToast, InputLeftElement, Box, Textarea} from '@chakra-ui/react';
import MyLayout from './MyLayout';
import {EmailIcon, PhoneIcon,Icon} from '@chakra-ui/icons';
import emailjs from 'emailjs-com';
import {FaRegUser} from 'react-icons/fa';
import {RiMessage3Fill} from 'react-icons/ri'
export default function Contact(){
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [message, setMessage] = useState("");
    var [phone, setPhone] = useState("");
    var [lock, setLock] = useState(false);
    const toast = useToast();
    
    function onChange(evt,type){
        if(type === "name"){
            setName(evt.target.value);
        }else if(type === "email"){
            setEmail(evt.target.value);
        }else if(type === "message"){
            setMessage(evt.target.value);
        }else if(type === "phone"){
            setPhone(evt.target.value);
        }
    }
    function clearInputs(){
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
    }
    function sendEmail(evt){
        evt.preventDefault();
        if(lock){
            return;
        }
        // console.log(evt.target);
        // console.log("Message sent. Thank you!",process.env.REACT_APP_EMAILJS_SERVICE);
        setLock(true);
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE,
            process.env.REACT_APP_EMAILJS_TEMPLATE,
        evt.target,
        process.env.REACT_APP_EMAILJS_USER
        ).then((result) => {
            // console.log(result.text);
            toast({
                title: `Message Sent. Thank you!`,
                position: "top-right",
                status: "success",
                isClosable: true,
            });
            clearInputs();
            setLock(false);
        }, (error) => {
            console.log(error.text);
            setLock(false);
        });
        return false;
    }
    return (
        <MyLayout>
            <Text>Fill the form below and I will contact you as soon as possible.</Text>
            <Box maxW = '800px' p = "10px">
                <form name="contact" onSubmit = {evt =>{return sendEmail(evt)}}>
                    
                    <InputGroup>
                        <InputLeftElement
                            children={<Icon as={FaRegUser} color="gray.300" />}
                            />
                        <Input isRequired name = "name" variant="flushed" placeholder="Name" value={name} onChange = {(evt)=>onChange(evt,"name")} type="text" />
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement
                            children={<PhoneIcon color="gray.300" />}
                            />
                        <Input isRequired name = "phone" variant="flushed" type="number" value={phone} placeholder="Phone number" onChange = {(evt)=>onChange(evt,"phone")}/>
                    </InputGroup>
                    
                    <InputGroup>
                        <InputLeftElement
                            children={<EmailIcon color="gray.300" />}
                            />
                        <Input  isRequired name = "email" variant="flushed" placeholder="Email" value={email} onChange = {(evt)=>onChange(evt,"email")} type="email" />
                    </InputGroup>
                    
                    <InputGroup>
                        <InputLeftElement
                            children={<Icon as={RiMessage3Fill} color="gray.300" />}
                            />
                        <Textarea paddingLeft = "40px" isRequired name = "message" variant="flushed" placeholder="Leave a message on why you're reaching out!" value={message} onChange = {(evt)=>onChange(evt,"message")} type="text" />
                    </InputGroup>
                    <Input w = "80px" type = "submit"/>
                </form>
            </Box>
        </MyLayout>
    )
}

