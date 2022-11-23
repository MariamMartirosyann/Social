import { TextField } from "@mui/material";
import { Controller, FormProvider, useForm } from "react-hook-form";
import MicNoneIcon from "@mui/icons-material/MicNone";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import "./style.css";
import { addMyAnswer } from "../../../store/myAnswer";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";


interface IFormData {
  myAnswer: string;
}


const Input = (): JSX.Element => {
  const dispatch = useDispatch();
  const methods = useForm<IFormData>({
    defaultValues: {
      myAnswer: "",
    },
  });

  const { handleSubmit, control ,reset} = methods;

  const onSubmit = (formData: IFormData) => {
    const newFormData = {
      id:nanoid(),
      myAnswer: formData.myAnswer,
    };
    console.log(newFormData);
    dispatch(addMyAnswer(newFormData));
    reset()
  };

  const handleKeyDown=(event:any)=>{
    if (event.key === 'Enter'){
      handleSubmit(onSubmit)
    }
  }

  return (
    <FormProvider {...methods}>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="inputMain">
      <div className="input">
        
        <Controller
          control={control}
          name="myAnswer"
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              className="inputField"
              onKeyDown={handleKeyDown}
              variant="outlined"
            />
          )}
        />
        <div className="smileIcon">
          <SentimentSatisfiedAltIcon />
        </div>
        <div className="attachIcon">
          <AttachFileIcon />
        </div>
      </div>
      <div className="inputIcon">
        <MicNoneIcon onClick={handleSubmit(onSubmit)} />
      </div>
    </div>
    </form>
    </FormProvider>
  );
};
export default Input;
