import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {Form as Formulary, Title, Input, TextArea, Button} from './styles';
import MessageStatus from '@components/MessageStatus';

const Form: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean | null>(null)

  const [isValidated, setIsValidated] = useState<boolean | null>(null);

    const handleSubmit = (event: any) => {
    event.preventDefault();

    if (name && email && message) {
        setIsValidated(true);

        emailjs.sendForm('service_uy70c0e', 'template_a84rhum', form.current!, 'qsqXDwuhs-ixM_0MD')
        .then((result) => {
            console.log(result.text);
            setSuccess(true);
        }, (error) => {
            console.log(error.text);
            setSuccess(false);
        });
    } else {
        setIsValidated(false);
        setSuccess(false);
    }
    };

  return(
        <Formulary ref={form} onSubmit={handleSubmit}>
            <Title>Contac Us</Title>
            <Input name="name" placeholder='name' value={name} onChange={(e : any) => setName(e.target.value)}/>
            <Input name="email" placeholder='email' value={email} onChange={(e : any) => setEmail(e.target.value)}/>
            <TextArea name="message" placeholder='Write your message' rows={10} value={message} onChange={(e : any) => setMessage(e.target.value)}/>
            <Button type='submit'>Send</Button>
            <MessageStatus isValidated={isValidated} isSuccess={success} messageError="your message not sent, try later" messageSuccess="your message was sent successfully, thank you very much"/>
        </Formulary>
 );
}

export default Form;