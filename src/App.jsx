import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router'

function App() {
  const navigate=useNavigate();
  const [firstName, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("")
  const [conEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConPassword] = useState("");
  const [error, setError] = useState();
  const countLower = (str) => {
    let cnt = 0;
    const lowerCaseReg = /[a-z]/
    for (let i = 0; i < str.length; i++) {
      if (lowerCaseReg.test(str[i])) {
        cnt++;
      }
    }
    return cnt;
  }
  const countUpper = str => {
    let cnt = 0;
    const upperCaseReg = /[A-Z]/
    for (let i = 0; i < str.length; i++) {
      if (upperCaseReg.test(str[i])) {
        cnt++;
      }
    }
    return cnt;
  }
  const submitForm = () => {
    setError();

    const name = /[a-zA-Z]+/;
    const numberReg = /[0-9]{10}/;
    const emailReg = /[a-zA-Z0-9._-]+@[a-zA-Z]+([.]*[a-zA-Z]*)*/;
    if (countLower(password) > 0 && countUpper(password) && password.length !== (countLower(password) + countUpper(password)) && password.length >= 8) {
      if (confPassword != password) {
        setError("Paswords Dont match");
      }
    }
    else {
      setError("Invalid Password")
    }
    if (emailReg.test(email)) {
      if (email != conEmail) {
        setError("Emails Dont match");
      }
    }
    else {
      setError("Invalid Email");
    }
    if (!numberReg.test(phone)) {
      setError("Invalid Phone")
    }
    if (!name.test(firstName)) {
      setError("Invalid First Name");
    }
    if (!name.test(lastName)) {
      setError("Invalid Last Name")
    }
    // console.log();
    if (!error) {
      console.log("all good");
      navigate("https://www.geu.ac.in/content/geu/en.html")
    }
    else {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <h1>Web_A_Thorn 1.0</h1>
      <div className='mx-10 bg-gray-100 rounded-md shadow-lg py-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-3'>
          <label htmlFor="firstName" className='font-bold text-lg text-blue-600'>First Name</label>
          <input type="text" name="firstName" id="firstName" className='mx bg-gray-100 border rounded-md z-10 shadow-lg shadow-blue-100 border-blue-500' onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 m-3'>
          <label htmlFor="lastName" className='font-bold text-lg text-blue-600'>Last Name</label>
          <input type="text" name="lastName" id="lastName" className='mx bg-gray-100 border rounded-md z-10 shadow-lg shadow-blue-100 border-blue-500' onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 m-3'>
          <label htmlFor="phone" className='font-bold text-lg text-blue-600'>Number</label>
          <input type="number" name="phone" id="phone" className='mx bg-gray-100 border rounded-md z-10 shadow-lg shadow-blue-100 border-blue-500' onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 m-3'>
          <label htmlFor="email" className='font-bold text-lg text-blue-600'>Mail</label>
          <input type="email" name="mail" id="mail" className='mx bg-gray-100 border rounded-md z-10 shadow-lg shadow-blue-100 border-blue-500' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 m-3'>
          <label htmlFor="confemail" className='font-bold text-lg text-blue-600'>Confirm Mail</label>
          <input type="email" name="confemail" className='mx bg-gray-100 border rounded-md z-10 shadow-lg shadow-blue-100 border-blue-500' id="confemail" onChange={(e) => setConfirmEmail(e.target.value)} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 m-3'>
          <label htmlFor="password" className='font-bold text-lg text-blue-600'>Password</label>
          <input type="password" name="password" className='mx bg-gray-100 border rounded-md z-10 shadow-lg shadow-blue-100 border-blue-500' id="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 m-3'>
          <label htmlFor="password" className='font-bold text-lg text-blue-600'>Confirm Password</label>
          <input type="password" name="password" className='mx bg-gray-100 border rounded-md z-10 shadow-lg shadow-blue-100 border-blue-500' id="password" onChange={e => setConPassword(e.target.value)} />
        </div>
        <button className='bg-blue-400 rounded-md text-white px-3 py-2 m-3' onClick={() => submitForm()}>Submit</button>
        {
          error && <div className='text-red-600'>
            {error}
          </div>
        }
      </div>
    </div>
  )
}

export default App
