import React from 'react'
import { useForm } from 'react-hook-form'

const Step1 = () => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit =(data)=>{
        console.log(data);
    }
    return (
        <div>
            <h1>step 1</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input type="text" name="firstName" />
                <input type="text" name="lastName" />
                <button>Next</button>
            </form>
        </div>
    )
}

export default Step1
