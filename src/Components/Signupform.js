import React from "react";
import { useState } from "react";
import "./Form.css";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Showimage from "./showimage";

// import { data } from "autoprefixer";

const Signupform = ({ toggleForm }) => {
  // const Signupform = () => {

    // const [showImage, setShowImage] = useState("")

  // Flag to indicate if the user has successfully registered
  const [registered, setRegistered] = useState(false);

  // Register the user using the provided username, email, and password
  const handleRegister = (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append('user[email]', e.target.email.value)
    formData.append('user[username]', e.target.username.value)
    formData.append('user[password]', e.target.password.value)
    formData.append("user[avatar]", e.target.avatar.files[0])
    // formData.append("user[avatar]", fileInput.current.files[0])
    submitToAPI(formData);


//     if (!e.target.username.value || !e.target.email.value || !e.target.password.value ) 
//     // if (!data)
//     {
//    toast.error("Please enter a valid username, email, and password.", {
//      position: "top-center",
//    });
//    // return;
//  }

  //   function submitToAPI(formData) {
  //     fetch("http://localhost:3000/signup", {
  //       method: "POST",
  //       body: formData
  //     })
  //     .then((response) => response.json())
  //     .then((formData) => {
  //       // if (data.ok) {
  //       //   setRegistered(true);}
  //       if (formData.error) {
  //         toast.error(formData.message, {
  //           position: "top-center",
  //         });
  //       } else {
  //         toast.success("Signed up successfully", {
  //           position: "top-center",
  //         });
  //       }

  //       setRegistered(true);
  //     });
  // };

  function submitToAPI(formData) {
    fetch("https://ireporter-backend-render.onrender.com/signup", {
      method: "POST",
      body: formData
    })
    .then((response) => response.json())
    .then((formData) => {
      // if (data.ok) {
      //   setRegistered(true);}
      if (formData.error) {
        toast.error(formData.message, {
          position: "top-center",
        });
      } else {
        toast.success("Signed up successfully", {
          position: "top-center",
        });
      }

      setRegistered(true);
    });
};


  if (registered) {
    return <Navigate to="/register" />;
  }

    }




    // Validate the provided values

    // if (!username || !email || !password || !avatar) {
    //   toast.error("Please enter a valid username, email, and password.", {
    //     position: "top-center",
    //   });
      // return;
    // }

    // Create a new user object
    // const newUser = {
    //   username,
    //   email,
    //   password,
    //   avatar,
    // };
    // console.log(newUser);
    // Send the new user object to the backend API for registration

  //   fetch("http://localhost:3000/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newUser),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.error) {
  //         toast.error(data.message, {
  //           position: "top-center",
  //         });
  //       } else {
  //         toast.success("Signed up successfully", {
  //           position: "top-center",
  //         });
  //       }

  //       setRegistered(true);
  //     });
  // };

  // if (registered) {
  //   return <Navigate to="/register" />;
  // }


  // const [form, setForm] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };
  // console.log(form);
  return (
    <div className="auth-form">
      <form onSubmit={(e) => handleRegister(e)} className="register-form">
        <label htmlFor="username" className="text-green-800 font-bold">Username</label>
        <input className="text-green-800 font-bold"
          type="username"
          id="username"
          placeholder="username"
          name="username"
          // value={username}
          // onChange={(event) => setUsername(event.target.value)}

          // value={form.username}
          // onChange={handleChange}
        />
        <label htmlFor="email" className="text-green-800 font-bold">Email</label>
        <input className="text-black"
          type="email"
          id="emails"
          placeholder="email"
          name="email"
          // value={email}
          // onChange={(event) => setEmail(event.target.value)}

          // value={form.email}
          // onChange={handleChange}
        />

        <label htmlFor="avatar" className="text-green-800 font-bold">Profile Picture</label>
        <input className="text-black file:rounded file:bg-green-800 file:text-white"
          type="file"
          id="avatar"
          // placeholder="email"
          name="avatar"
          // value={avatar}
          // onChange={(event) => setAvatar(event.target.value)}

          // value={form.email}
          // onChange={handleChange}
        />

        <label htmlFor="password" className="text-green-800 font-bold">Password</label>
        <input className="text-black"
          type="password"
          id="password"
          placeholder="**********"
          name="password"
          // value={password}
          // onChange={(event) => setPassword(event.target.value)}

          // value={form.password}
          // onChange={handleChange}
        />
        <button className="btn bg-green-800 hover:bg-yellow-500 hover:border-yellow-500 text-lg border-4 text-black py-1">Sign-Up</button>
      </form>

      <button className="link btn bg-green-800" onClick={() => toggleForm("login")}>
        Signed up? Login here.
      </button>

      {/* <Showimage /> */}
      <ToastContainer />
        {registered && <Navigate to="/register" />}
    </div>
  );
};
export default Signupform;





// import React from "react";
// import { useState } from "react";
// import "./Form.css";
// import { Navigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Signupform = ({ toggleForm }) => {

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [avatar, setAvatar] = useState("");

//   // Flag to indicate if the user has successfully registered
//   const [registered, setRegistered] = useState(false);

//   // Register the user using the provided username, email, and password
//   const handleRegister = (e) => {
//     // e.preventDefault();
//     // Validate the provided values
//     if (!username || !email || !password || !avatar) {
//       toast.error("Please enter a valid username, email, and password.", {
//         position: "top-center",
//       });
//       // return;
//     }

//     // Create a new user object
//     const newUser = {
//       username,
//       email,
//       password,
//       avatar,
//     };
//     console.log(newUser);
//     // Send the new user object to the backend API for registration
//     fetch("http://localhost:3000/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.error) {
//           toast.error(data.message, {
//             position: "top-center",
//           });
//         } else {
//           toast.success("Signed up successfully", {
//             position: "top-center",
//           });
//         }

//         setRegistered(true);
//       });
//   };

//   if (registered) {
//     return <Navigate to="/register" />;
//   }


//   // const [form, setForm] = useState({
//   //   username: "",
//   //   email: "",
//   //   password: "",
//   // });

//   // const handleChange = (e) => {
//   //   setForm({ ...form, [e.target.name]: e.target.value });
//   // };
//   // console.log(form);
//   return (
//     <div className="auth-form">
//       <form onSubmit={handleRegister} className="register-form">
//         <label htmlFor="username" className="text-green-800 font-bold">Username</label>
//         <input className="text-green-800 font-bold"
//           type="username"
//           id="username"
//           placeholder="username"
//           name="username"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//           // value={form.username}
//           // onChange={handleChange}
//         />
//         <label htmlFor="email" className="text-green-800 font-bold">Email</label>
//         <input className="text-black"
//           type="email"
//           id="emails"
//           placeholder="email"
//           name="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           // value={form.email}
//           // onChange={handleChange}
//         />

//         {/* <label htmlFor="avatar" className="text-green-800 font-bold">Profile Picture</label>
//         <input className="text-black file:rounded file:bg-green-800 file:text-white"
//           type="file"
//           id="avatar"
//           // placeholder="email"
//           name="avatar"
//           value={avatar}
//           onChange={(event) => setAvatar(event.target.value)}
//           // value={form.email}
//           // onChange={handleChange}
//         /> */}

//         <label htmlFor="password" className="text-green-800 font-bold">Password</label>
//         <input className="text-black"
//           type="password"
//           id="password"
//           placeholder="**********"
//           name="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           // value={form.password}
//           // onChange={handleChange}
//         />
//         <button className="btn bg-green-800 hover:bg-yellow-500 hover:border-yellow-500 text-lg border-4 text-black py-1">Sign-Up</button>
//       </form>

//       <button className="link btn bg-green-800" onClick={() => toggleForm("login")}>
//         Already have an account? Login here.
//       </button>
//       <ToastContainer />
//         {registered && <Navigate to="/register" />}
//     </div>
//   );
// };
// export default Signupform;