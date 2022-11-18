import { TextField } from "@mui/material";
//import { Controller } from "react-hook-form";
import MicNoneIcon from "@mui/icons-material/MicNone";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import "./style.css";

const Input = () => {
  return (
    <div className="inputMain">
      <div className="input">
        {/* <Controller
        control={control}
        render={({ field }) => ( */}
        <TextField
          //{...field}
          //value={field.value ?? ""g}
          fullWidth
          multiline={true}
          variant="outlined"
        />
         <div className="smileIcon"> <SentimentSatisfiedAltIcon/></div>
        <div className="attachIcon"> <AttachFileIcon/></div>
      </div>
      <div className="inputIcon">
        <MicNoneIcon />
      </div>
    </div>
  );
};

export default Input;
