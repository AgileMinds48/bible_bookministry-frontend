"use client"
import { useState } from 'react';
import { inputItemsSignUp } from '@/app/utils/data';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa6';
import { IoIosCheckmark } from 'react-icons/io';
import { AiOutlineLoading } from 'react-icons/ai';
import { SignUpFormData, signUpField } from '@/app/utils/data';
import Image from 'next/image';
import { google,  logo2 } from '@/public';
import { MdEmail, MdOutlinePhoneEnabled } from 'react-icons/md';

interface SignUpProps{
  onLoginClick?:(showLogin:boolean)=>void
}
const SignUp = ({onLoginClick}:SignUpProps) => {
  const handleShowLogin = () => {
   {onLoginClick && onLoginClick(true)};
}
  const [shown, setShown] = useState<{[key:string]:boolean}>({
    password: false,
    password2: false,
  });

  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    userName:"",
    email: '',
    password: '',
    password2: '',
    phoneNumber:""
  });
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [minChar, setMinChar] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  //function to handle input change and set values
  const handleFormChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //destructuring name and value
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    if (
      name === 'password' &&
      updatedForm.password &&
      updatedForm.password.length >= 8
    ) {
      setMinChar(true);
    } else {
      setMinChar(false);
    }
    //live password mismatch check
    if (
      (name === 'password' || name === 'password2') &&
      updatedForm.password &&
      updatedForm.password &&
      updatedForm.password !== updatedForm.password2
    ) {
      setPasswordError('Passwords mismatch');
    } else {
      setPasswordError('');
    }
  };

  //function to handle Form submission
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');

    setLoading(true);
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    try {
      const res = await fetch(`${backendUrl}/api/v1/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          formData
        ),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error((data as any).detail || data.error ||JSON.stringify(data));
      }
      setSuccessMsg(data.successMessage || "Signup successful!");
      setTimeout(()=>handleShowLogin(),500)
      setFormData({
           firstName: '',
    lastName: '',
    userName:"",
    email: '',
    password: '',
    password2: '',
    phoneNumber:""
     })
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError('Oops... Signup failed. Try again');
        console.log("Sign Up failed Error: ", err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleShow = (field:string) => {
    setShown((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  // const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  return (
    <section className=''>
      <div  className="bg-[#5a88a7] shadow-2xl poppins grid md:grid-cols-2 text-black min-h-[80dvh] ">
        <div
          // style={{ background: "url(/pattern-bg.png)" }}
          className='content-center w-full h-full'
        >
        <Image priority={true} src={logo2} alt='Bible and book ministry logo' className='w-7xl object-cover'/>
</div>
      <div className="bg-white p-5 sm:p-10 md:p-24 lg:px-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-15">
            <h1 className="text-4xl md:text-6xl font-bold text-[#15278c]">Create Account</h1>
            <p className="text-gray-800 md:text-xl text-[1.1rem] mb-10">
              Sign up to get started
            </p>
          </div>
          {/* <div className=""> */}

          {inputItemsSignUp.map(({ input, inputName, type, warning }:signUpField) => (
            <div
              key={inputName}
              style={{position:"relative"}}
              className={`relative h-14 ${
                inputName === 'firstName'
                  ? 'w-[48%] inline-block mr-4'
                  : inputName === 'lastName'
                  ? 'w-[48%] inline-block'
                  : 'w-full'
              } ${
                inputName === 'password' || inputName === 'password2'
                  ? passwordError
                    ? 'border-red-600'
                    : 'border-gray-500'
                  : 'border-gray-500'
              } border-2  mb-6 rounded-lg`}
            >
              {(inputName === 'password' || inputName === 'password2') && (
                <span
                  onClick={() => handleShow(inputName)}
                  className="absolute right-4 h-4 w-4 top-[50%] -translate-y-[50%] cursor-pointer text-gray-800"
                >
                  {shown[inputName] ? (
                    <FaEye className="w-full h-full" />
                  ) : (
                    <FaEyeSlash className="w-full h-full" />
                  )}
                </span>
              )}
              <span className="absolute left-4 z-1 top-[50%] -translate-y-[50%] text-gray-800">
  {inputName === "firstName" || inputName === "lastName" || inputName==="userName"? (
    <FaUser />
  ) : inputName === "email" ? (
    <MdEmail />
  ) : inputName === "phoneNumber" ? (
    <MdOutlinePhoneEnabled />
  ) : (
    <FaLock />
  )}
</span>
              <input
                onFocus={
                  inputName === 'password'
                    ? () => setPasswordFocused(true)
                    : undefined
                }
                onBlur={
                  inputName === 'password'
                    ? () => setPasswordFocused(false)
                    : undefined
                }
                //if anything other than the password fields,use the `type` prop
                //else toggle between password and text for each field
                type={
                  inputName === 'password' || inputName === 'password2' //this line makes sure it applies to just the password and repeat password fields
                    ? shown[inputName]
                      ? 'text'
                      : 'password'
                    : type
                }
                id={inputName}
                name={inputName}
                value={formData[inputName as keyof typeof formData]}
                onChange={handleFormChange}
                required
                placeholder=" "
                className={`peer w-full h-full outline-none p-4 pr-9 lg:text-xl text-[1.1em] pl-12 `}
              />
              <label
                htmlFor={inputName}
                className="cursor-text transition-all duration-300 peer-focus:text-[1.1em] peer-focus:px-1 peer-focus:-top-0.5 peer-not-placeholder-shown:text-[#15278c] peer-not-placeholder-shown:-top-0.5 peer-not-placeholder-shown:text-[1.1em] peer-not-placeholder-shown:px-1  absolute left-12 top-[50%] -translate-y-[50%] text-[1.1em] bg-white text-gray-500 "
              >
                {input}
              </label>
              <p
                className={`${
                  minChar ? 'text-green-600' : 'text-red-600'
                } text-sm flex gap-2 items-center`}
              >
                {passwordFocused && warning && minChar && <IoIosCheckmark />}{' '}
                {passwordFocused && warning}
              </p>
              <p className="text-red-600 text-center">
                {inputName === 'password2' && passwordError}
              </p>
            </div>
          ))}

       
          <button
            type="submit"
            disabled={loading || successMsg!=="" || passwordError!==""}
            className="w-full h-12 rounded-lg mt-8 text-white font-bold text-xl  bg-[#15278c] tracking-widest cursor-pointer flex justify-center items-center"
          >
            {loading ? (
              <span className="flex items-center gap-3 ">
                {/* <div className="bg-transparent border-2 h-5 w-5 rounded-full absolute border-gray-600"></div>*/}
                <AiOutlineLoading className="animate-[spin_0.8s_ease-out_infinite]" />
                Signing Up
              </span>
            ) : (
              'Sign Up'
            )}
          </button>
           {error && <p className="text-center text-red-600">{error}</p>}
            {successMsg &&
              <div>
              <p className="text-center text-green-600">{successMsg}</p>
                <p className='text-center flex justify-center items-center gap-2'>Redirecting to Login <AiOutlineLoading className='animate-spin'/></p>
              </div>
            }
            
            <div className="relative mt-6 mb-4">
          <div className='before:content-[""] before:block lg:w-[45%] w-[25%] h-0.5 bg-gray-500 top-[50%] absolute hidden sm:block'></div>
            <p className="uppercase text-center mt-4 text-[1em] md:text-[1.1em] font-medium">
              Or
              </p>
          <div className='after:content-[""] after:block lg:w-[45%] w-[25%] h-0.5 right-0 bg-gray-500 top-[50%] absolute hidden sm:block'></div>

            </div>
        <button className='   w-full'>
          <div className="flex justify-center pr-4  p-2  items-center w-[60%] rounded-full border-[#15278c] border-2 m-auto">
            <Image
              className="h-10 object-contain cursor-pointer"
              src={google}
              alt="google"
                />
                <p>Continue with Google</p>
              </div>
        </button>
          <p className="text-gray-500 text-left mt-4 text-[1em]">
            Already a user?{' '}
            <button onClick={handleShowLogin} className="underline  cursor-pointer text-[#15278c]">
                Login
            </button>
          </p>
        </form>
      </div>
      </div>
    </section>
  );
};

export default SignUp;
