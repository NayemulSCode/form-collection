import React from 'react'
import { useForm } from 'react-hook-form'
import MainContainer from '../components/formComponents/MainContainer';
import Form from '../components/formComponents/Form'
import Input from '../components/formComponents/Input';
import PrimaryButton from '../components/formComponents/PrimaryButton';
const Step1 = () => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit =(data)=>{
        console.log(data);
    }
    return (
        <MainContainer>
            <h1>step 1</h1>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Input 
                    {...register}
                    type="text"
                    label="First Name" 
                    name="firstName" 
                />
                <Input 
                    {...register}
                    type="text"
                    label="Last Name" 
                    name="lastName" 
                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default Step1
