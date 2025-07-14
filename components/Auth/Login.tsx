"use client"
import {  useState } from 'react';
import { inputItemsLogin, loginField, LoginFormData } from '@/app/utils/data';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa6';
import { AiOutlineLoading } from 'react-icons/ai';
import {  } from '@/app/utils/data';
import Link from 'next/link';
import Image from 'next/image';
import { google, logo, logo2 } from '@/public';
import { MdEmail } from 'react-icons/md';


const Login = () => {


  const [shown, setShown] = useState<{[key:string]:boolean}>({
    password: false,
    repeatpassword: false,
  });

  const [formData, setFormData] = useState<LoginFormData>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repeatpassword: '',
  });
  // const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
   const [error, setError] = useState('')
  const [passwordFocused, setPasswordFocused] = useState(false);
  //function to handle input change and set values
  const handleFormChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //destructuring name and value
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    // if (
    //   name === 'password' &&
    //   updatedForm.password &&
    //   updatedForm.password.length >= 8
    // ) {
    //   setMinChar(true);
    // } else {
    //   setMinChar(false);
    // }
    // //live password mismatch check
    // if (
    //   (name === 'password' || name === 'repeatpassword') &&
    //   updatedForm.password &&
    //   updatedForm.repeatpassword &&
    //   updatedForm.password !== updatedForm.repeatpassword
    // ) {
    //   setPasswordError('Passwords mismatch');
    // } else {
    //   setPasswordError('');
    // }
  };

  //function to handle Form submission
  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');
    // if (formData.password !== formData.repeatpassword) {
    //   setPasswordError('Paswords mismatch');
    //   return;
    // }
    // setPasswordError('');
    setLoading(true);
    // try {
    //   const res = await fetch(`${API_URL}/api/auth/login/`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       first_name: formData.firstname,
    //       last_name: formData.lastname,
    //       email: formData.email,
    //       password: formData.password,
    //       password2: formData.repeatpassword,
    //     }),
    //     credentials: 'include',
    //   });
    //   const data = await res.json();
    //   if (!res.ok) {
    //     throw new Error(data.detail || JSON.stringify(data));
    //   }
    //   alert('Account created successfully');
    //   // navigate('/login');
    // } catch (err: unknown) {
    //   if (err instanceof Error) {
    //           setError(err.message || 'Oops... Login failed');
    //   }
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleShow = (field:string) => {
    setShown((prev) => ({ ...prev, [field]: !prev[field] }));
  };
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
            <h1 className="text-4xl md:text-6xl font-bold">Login</h1>
            <p className="text-gray-800 md:text-xl text-[1.1rem] mb-10">
              Get back into your account
            </p>
          </div>
          {/* <div className=""> */}

          {inputItemsLogin.map(({ input, inputName, type }:loginField) => (
            <div
              key={inputName}
              className={`relative h-14 ${
                inputName === 'firstname'
                  ? 'w-[48%] inline-block mr-4'
                  : inputName === 'lastname'
                  ? 'w-[48%] inline-block'
                  : 'w-full'
              } border-2  mb-6 rounded-lg`}
            >
              {(inputName === 'password' || inputName === 'repeatpassword') && (
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
                {inputName === "firstname"
                  ? <MdEmail/>
                  :<FaLock/>
                }
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
                  inputName === 'password' || inputName === 'repeatpassword' //this line makes sure it applies to just the password and repeat password fields
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
                className={`peer w-full h-full outline-none p-4 pr-9 lg:text-xl text-[1.1em] pl-12 autofill:bg-white $`}
              />
              <label
                htmlFor={inputName}
                className="cursor-text transition-all duration-300 peer-focus:text-[1.1em] peer-focus:px-1 peer-focus:-top-0.5 peer-not-placeholder-shown:text-[#15278c] peer-not-placeholder-shown:-top-0.5 peer-not-placeholder-shown:text-[1.1em] peer-not-placeholder-shown:px-1  absolute left-12 top-[50%] -translate-y-[50%] text-[1.1em] bg-white text-gray-500"
              >
                {input}
              </label>
            
            </div>
          ))}

       
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-lg mt-8 text-white font-bold text-xl  bg-[#15278c] tracking-widest cursor-pointer flex justify-center items-center"
          >
            {loading ? (
              <span className="flex items-center gap-3 ">
                <AiOutlineLoading className="animate-[spin_0.8s_ease-out_infinite]" />
                Logging in
              </span>
            ) : (
              'Login'
            )}
          </button>
          <p className="text-center text-red-600">{error}</p>
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
            Don't have an account?{' '}
            <button className="underline text-black cursor-pointer">
              Signup
            </button>
          </p>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Login;
