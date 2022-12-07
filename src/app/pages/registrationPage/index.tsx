import { TextField, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { requiredRules } from "../../constants";
import { ERoutes } from "../../routes/constants";
import BasicInput from "../../shared/components/basicInput";
import AddAvatar from "../../assests/images/addAvatar.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { auth,storage } from "../../../firebase";
import "./style.css";
import { useState } from "react";

const Registration = () => {
  const [err, setErr] = useState<boolean>(false);

  interface IFormData {
    email: string;
    name: string;
    password: string;
    avatar: any;
  }

  const methods = useForm<IFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      avatar: "",
    },
    mode: "all",
  });
  const onSubmit = async (formData: IFormData) => {
    const email = formData.email;
    const password = formData.password;
    const file = formData.avatar;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, "images/rivers.jpg");
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          setErr(true);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    } catch (error: any) {
      console.log(error);

      setErr(true);
    }
  };

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      <div className="login">
        <div className="box">
          <div>
            <Typography variant="h5" my={3}>
              {" "}
              My Chat
            </Typography>
          </div>
          <FormProvider {...methods}>
            <div>
              <p>Register</p>
            </div>
            <div className="input">
              <BasicInput
                name="name"
                label="Display ame"
                rules={requiredRules}
              />
            </div>
            <div className="input">
              <BasicInput name="email" label="Email" rules={requiredRules} />
            </div>
            <div className="input">
              <BasicInput
                name="password"
                label="Password"
                rules={requiredRules}
              />
            </div>
            <div className="inputAvatar">
              <TextField
                name="avatar"
                type="file"
                id="file"
                style={{ display: "none" }}
              />
              <label htmlFor="file" className="avatarLabel">
                <div>
                  {" "}
                  <img src={AddAvatar} alt="" className="img" />
                </div>
                <div className="avatarText">Add an avatar</div>
              </label>
            </div>
            <div>
              <button className="loginBtn">Sign In</button>
            </div>
            {err && <span>Something went wrong</span>}
          </FormProvider>
          <div>
            <p>
              You don't have account??? <Link to={ERoutes.LOGIN}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Registration;
