import { TextField } from "@mui/material";
//import { Controller } from "react-hook-form";
import "./style.css";

const Input = () => {
  return (
    <div className="input">
      {/* <Controller
        control={control}
        render={({ field }) => ( */}
          <TextField
            //{...field}
            //value={field.value ?? ""}
            fullWidth
            multiline={true}
            variant="outlined"
          />
    
    </div>
  );
};

export default Input;
