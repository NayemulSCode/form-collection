import React from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useData } from '../context/DataContext'
import MainContainer from '../components/formComponents/MainContainer'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Form from '../components/formComponents/Form';
import Input from '../components/formComponents/Input';
import PrimaryButton from '../components/formComponents/PrimaryButton'
// schema validation
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { parsePhoneNumberFromString } from 'libphonenumber-js'

const schema = yup.object().shape({
    email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a require field"),
});
const normalizePhoneNumber =(value)=>{
    const phoneNumber  = parsePhoneNumberFromString(value)
    if(!phoneNumber){
        return value
    }
    return(
        phoneNumber.formatInternational()
    )
}

const Step2 = () => {
    const {setValues, data} = useData();
    const history = useHistory();
    const {register, handleSubmit, watch, formState:{ errors }} = useForm({
        defaultValues: {
            email: data.email,
            hasPhone: data.hasPhone,
            phoneNumber: data.phoneNumber,
          },
          mode: "onBlur",
          resolver: yupResolver(schema),
    });
    const hasPhone = watch("hasPhone", false);
    const onSubmit = (data)=>{
        history.push("/step3");
        setValues(data);
        console.log(data);
    }
    return (
        <MainContainer>
            <Typography>Step 2</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    {...register("email")}
                    type="text"
                    label="Email" 
                    name="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    required
                />
                <FormControlLabel 
                    control={
                        <input type="checkbox" defaultValue={data.hasPhone} defaultChecked={data.hasPhone} {...register("hasPhone")} color="primary"  name="hasPhone"/>
                    }
                    label="Do you have a Phone"
                />
                 {
                     hasPhone &&(
                         <Input 
                            {...register("phoneNumber")}
                            type="tel"
                            label="Phone Number" 
                            name="phoneNumber"
                            onChange={(event)=>{
                                event.target.value = normalizePhoneNumber(event.target.value)
                            }}
                         />
                     )
                 }   
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}

export default Step2
