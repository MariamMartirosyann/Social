import { TextField } from "@mui/material";
import { Controller, FormProvider, useForm } from "react-hook-form";
import MicNoneIcon from "@mui/icons-material/MicNone";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import "./style.css";

interface IFormData {
  text: string;
}
const Input = () => {
  const methods = useForm<IFormData>({
    defaultValues: {
      text: "",
    },
  });

  const { handleSubmit, control } = methods;

  const onSubmit = (formData: IFormData) => {
    const newFormData = {
      text: formData.text,
    };
    console.log(newFormData);
  };

  return (
    <div className="inputMain">
      <div className="input">
          <Controller
            control={control}
            name="text"
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                className="inputField"
                multiline={true}
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
  );
};

export default Input;
