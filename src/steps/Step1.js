import React from 'react'
import { useForm } from 'react-hook-form'
import MainContainer from '../components/formComponents/MainContainer';
import Form from '../components/formComponents/Form'
import Input from '../components/formComponents/Input';
import PrimaryButton from '../components/formComponents/PrimaryButton';
// form validation
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("Last name is a required field"),
});

const Step1 = () => {
    const {register, handleSubmit, formState:{ errors }} = useForm({
        // defaultValues: {firstName: data.firstName, lastName: data.lastName},
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    
    const onSubmit =(data)=>{
        console.log(data);
    }
    return (
        <MainContainer>
            <h1>step 1</h1>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <Input 
                    {...register("firstName")}
                    type="text"
                    label="First Name" 
                    name="firstName"
                    error = {!!errors.firstName}
                    helperText =  {errors?.firstName?.message}
                />
                <Input 
                    {...register("lastName")}
                    type="text"
                    label="Last Name" 
                    name="lastName"
                    error = {!!errors.lastName}
                    helperText =  {errors?.lastName?.message} 
                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default Step1
