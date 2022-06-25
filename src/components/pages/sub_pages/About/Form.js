import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./Style.css";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        <h2>Get In Touch</h2>
        <input
          {...register("exampleRequired", { required: true })}
          placeholder="Full Name"
          className="form-control"
        />
        <input placeholder="Email" className="form-control" />
        <input placeholder="Subject" className="form-control" />
        {errors.exampleRequired && <span>This field is required</span>}
        <textarea
          placeholder="Your Message"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="9"
        ></textarea>
        <button href="#" className="formbutton">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
