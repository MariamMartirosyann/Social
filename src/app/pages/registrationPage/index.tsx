import { TextField, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { requiredRules } from "../../constants";
import { ERoutes } from "../../routes/constants";
import BasicInput from "../../shared/components/basicInput";
import AddAvatar from "../../assests/images/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../../../firebase";
import "./style.css";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

const Registration = () => {
  const [err, setErr] = useState<boolean>(false);

  interface IFormData {
    email: string;
    displayName: string;
    password: string;
    file: any;
  }

  const methods = useForm<IFormData>({
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
      file: "",
    },
    mode: "all",
  });
  const onSubmit = async (formData: IFormData) => {
    const displayName = formData.displayName;
    const email = formData.email;
    const password = formData.password;
    const file = formData.file;
    console.log(formData);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, 'images/MA.jpg');
      const uploadTask = uploadBytesResumable(storageRef, file);
    
      uploadTask.on(
        "state_changed",

        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {

            try {
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              console.log(2);
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
            } catch (err) {
              console.log(err);
              setErr(true);
            }
          });
        },
        (error) => {
          console.log(error, "aaaa");
          setErr(true);
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
                name="displayName"
                label="Display name"
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
                name="file"
                type="file"
                id="file"
                //style={{ display: "none" }}
              />
              {/* <label htmlFor="file" className="avatarLabel">
                <div>
                  {" "}
                  <img src={AddAvatar} alt="" className="img" />
                </div>
                <div className="avatarText">Add an avatar</div>
              </label> */}
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
