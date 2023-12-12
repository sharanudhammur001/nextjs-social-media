"use client"

import "./login.scss"
import Link from 'next/link';
import { login } from "../api/data";
import { useState } from "react";
import { coffeewebStorageKeys, coffeeweb_SetLocal } from "../LocalStorage";
import { useRouter } from 'next/navigation'
import { Button, Stack } from "@chakra-ui/react";
import { SmallCloseIcon } from '@chakra-ui/icons'
import CloseIcon from '@mui/icons-material/Close';

function page() {

  const router = useRouter();
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserDetails({ ...userDetails, [name]: value })
  }

  const handleSubmit = async () => {
    setLoading(true)
    setErrorMessage(null)
    const response = await login(userDetails)
    try {
      console.log(!response.isError)
      if (!response.isError) {
        coffeeweb_SetLocal(coffeewebStorageKeys.userDetails, response.returnLst)
        router.push("/dashboard")
      } else {
        setLoading(false)
        setErrorMessage(response.message)
      }
    } catch {

    } finally {

    }

  }

  return (
    <div className='login'>
      <div className='container'>
        <div className='form'>
          <div className='header'>
            <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-2019.png" alt="" />
          </div>
          <div className='body'>
            {errorMessage &&
              <div className="error_message">
                {errorMessage}
                <CloseIcon className="closeIcon" onClick={() => setErrorMessage(null)} />
              </div>
            }

            <div>
              {/* <label htmlFor="">username</label> */}
              <input type="text" name='username' placeholder="Email address or phone number" onChange={handleChange} value={userDetails.username} required />
            </div>
            <div>
              {/* <label htmlFor="">password</label> */}
              <input type="password" name='password' placeholder="Password" onChange={handleChange} value={userDetails.password} required />
            </div>
            <div>
              {/* <input type="hidden" name='profilePic' onChange={handleChange} value={userDetails.profilePic} /> */}
              {/* <button onClick={handleSubmit}>Submit</button> */}
              {/* <button onClick={handleSubmit}>Submifft</button> */}



              <Button
                isLoading={loading}
                // loadingText='Submitting'
                colorScheme='teal'
                variant='outline'
                onClick={handleSubmit}
              >
                Log In
              </Button>
            </div>

          </div>
          <div className='forgotpassword'>Forgot password?</div>
          <div className="hr"></div>
          <div className='footer'>Dont have an account???? <Link href='/register'>Register</Link></div>
          {/* <div className='or'>
            <div className="line"></div>
            <div>or</div>
            <div className="line"></div>
          </div> */}
          {/* <div className='footer'>Dont have an account? <Link href='/register'>Register</Link></div> */}


        </div>
      </div>
    </div>
  )
}

export default page
