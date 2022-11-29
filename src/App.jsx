import { useState } from "react";
import { useRef } from "react";
import "./App.css";

export function App() {
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  return (
    <div>
      <h1>Form</h1>
      <label htmlFor="email">Your email address</label>
      <br />
      <input type="text" name="email" ref={emailRef} />
      <br />

      <label htmlFor="first-name">Your firstname : </label>
      <br />
      <input type="text" name="first-name" ref={firstNameRef} />
      <br />

      <label htmlFor="last-name">Your last name : </label>
      <br />
      <input type="text" name="last-name" ref={lastNameRef} />

      <br />
      <br />

      <button
        onClick={() => {
          setEmail(emailRef.current.value);
          setfirstName(firstNameRef.current.value);
          setlastName(lastNameRef.current.value);
        }}
      >
        Submit the form
      </button>
      <br />
      <br />

      <div>
        Your email adress is : {email} <br />
        Your first name : {firstName} <br />
        Your last name : {lastName}
      </div>
    </div>
  );
}

export default App;
