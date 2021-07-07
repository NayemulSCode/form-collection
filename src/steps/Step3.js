import { Typography } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import MainContainer from '../components/formComponents/MainContainer';
import Form from '../components/formComponents/Form'
import { useData } from '../context/DataContext'
import PrimaryButton from '../components/formComponents/PrimaryButton';
import FileInput from '../components/formComponents/FileInput';


const Step3 = () => {
    const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });
  const onSubmit = (data) => {
    // history.push("./result");
    setValues(data);
    console.log(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
}

export default Step3
