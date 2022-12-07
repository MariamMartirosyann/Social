import { Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { requiredRules } from "../../constants";
import { ERoutes } from "../../routes/constants";
import BasicInput from "../../shared/components/basicInput";
import "./style.css";

const LoginPage = () => {
  
  interface IFormData {
    email: string;
    name: string;
  }

  const methods = useForm<IFormData>({
    defaultValues: {
      email: "",
      name: "",
    },
    mode: "all",
  });
  const { handleSubmit, control ,reset} = methods;

  const onSubmit = () => {
    console.log(methods.watch);
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <div className="login">
        <div className="loginBox">
          <div>
            <Typography variant="h5" my={3}>
              {" "}
              My Chat
            </Typography>
          </div>
          <FormProvider {...methods}>
            <div>
              <p>Login</p>
            </div>
            <div className="input">
              <BasicInput name="email" label="Email" rules={requiredRules} />
            </div>
            <div className="input">
              <BasicInput name="name" label="Name" rules={requiredRules} />
            </div>
            <div>
              <button className="loginBtn" onClick={methods.handleSubmit(onSubmit)}>Sign In</button>
            </div>
          </FormProvider>
          <div>
            <p>
              You don't have account???{" "}
              <Link to={ERoutes.REGISTER}>Register</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
