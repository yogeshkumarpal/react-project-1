import React, { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [userDatalist, setuserDatalist] = useState([]);

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    setuserDatalist((prevData) => [...prevData, data]);
    alert("Form submitted successfully!");
    reset();
  };

  const handleDelete = (indexToDelect)=>{
    const updatedList = userDatalist.filter ((_ , index)=> index !== indexToDelect);
    setuserDatalist (updatedList)
  }

  return (
    <div className="min-h-screen  p-6 " >
      <h2 className="max-w-md mx-auto" >REGISTER</h2>
      <form onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-gray-100 shadow-md rounded p-6 bg-[url('/Demon-Slayer.jpg')] bg-cover h-64 w-full text-white ">
        <div>
          <label>Name : </label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="FullName"
          />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>

        <div>
          <label>Email : </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            placeholder="Enter Your Email"
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        <div>
          <label>Password : </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters",
              },
            })}
            placeholder="Password"
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        <button type="submit"  className="bg-royalblue-700 border-black hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full" >Submit</button>
      </form>

      {userDatalist.length === 0 ? (
        <h3>No Data Found</h3>
      ) : (
        <ul className="max-w-md bg-gray-100 shadow-md rounded p-6">
          {userDatalist.map((user, index) => (
            <li key={index}  >
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <button onClick={()=>handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
