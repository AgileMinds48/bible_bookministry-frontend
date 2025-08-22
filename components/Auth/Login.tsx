"use client"
import { useState } from 'react';
import { inputItemsLogin, loginField, LoginFormData } from '@/app/utils/data';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa6';
import { AiOutlineLoading } from 'react-icons/ai';
import { } from '@/app/utils/data';
import Image from 'next/image';
import { google, logo2 } from '@/public';
import { MdEmail } from 'react-icons/md';
import { handleLoggedIn } from '@/hooks/auth';

interface LoginProps {
  handleCloseModal: () => void
  onSignUpClick:()=>void
}
const Login = ({handleCloseModal,onSignUpClick}: LoginProps) => {
  const [successMsg,setSuccessMsg]= useState<string>("")

  const [shown, setShown] = useState<{ [key: string]: boolean }>({
    password: false,
  });

  const [formData, setFormData] = useState<LoginFormData>({
    usernameOrEmail: '',
    password: '',

  });
  // const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  // const [passwordFocused, setPasswordFocused] = useState(false);
  //function to handle input change and set values
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //destructuring name and value
    const { name, value } = e.target;
    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

  };

  //function to handle Form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');


    setLoading(true);
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    try {
      const res = await fetch(`${backendUrl}/api/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.detail || JSON.stringify(data));
      }
      handleLoggedIn({userRole:data.userRole,userEmail:data.email,userName:data.userName});
      setSuccessMsg("Login was successful")
      setFormData({
        password: "",
        usernameOrEmail:""
      })

      // navigate to previous page;
      handleCloseModal();
      window.location.reload();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError('Oops... Login failed. Please try again');
        console.log("Login fail error: ",err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleShow = (field: string) => {
    setShown((prev) => ({ ...prev, [field]: !prev[field] }));
  };
  return (
    <section className=''>
      <div className="bg-[#5a88a7] shadow-2xl poppins grid md:grid-cols-2 text-black min-h-[80dvh] ">
        <div
          className='content-center w-full h-full'
        >
          <Image priority={true} src={logo2} alt='Bible and book ministry logo' className='w-7xl object-cover' />
        </div>
        <div className="bg-white p-5 sm:p-10 md:p-24 lg:px-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-15">
              <h1 className="text-4xl md:text-6xl font-bold text-[#15278c]">Login</h1>
              <p className="text-gray-800 md:text-xl text-[1.1rem] mb-10">
                Get back into your account
              </p>
            </div>
            {/* <div className=""> */}

            {inputItemsLogin.map(({ input, inputName, type }: loginField) => (
              <div
                key={inputName}
                className={`relative h-14 'w-full border-2  mb-6 rounded-lg`}
              >
                {inputName === 'password' && (
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
                  {inputName === "usernameorEmail"
                    ? <MdEmail />
                    : <FaLock />
                  }
                </span>
                <input
                  type={
                    inputName === 'password'  //this line makes sure it applies to just the password 
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
                  className={`peer w-full h-full outline-none p-4 pr-9 lg:text-xl text-[1.1em] pl-12 autofill:bg-white `}
                />
                <label
                  htmlFor={inputName}
                  className="cursor-text transition-all duration-300 peer-focus:text-[1.1em] peer-focus:px-1 peer-focus:-top-0.5 peer-not-placeholder-shown:text-[#15278c] peer-not-placeholder-shown:-top-0.5 peer-not-placeholder-shown:text-[1.1em] peer-not-placeholder-shown:px-1  absolute left-12 top-[50%] -translate-y-[50%] text-[1.1em] bg-white text-gray-500  "
                >
                  {input}
                </label>

              </div>
            ))}<p className='flex justify-end underline text-gray-700 hover:text-gray-800 -mt-4 cursor-pointer'>Forgot password?</p>

            <button
              type="submit"
              disabled={loading || successMsg!==""}
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
            {error && <p className="text-center text-red-600">{error}</p>}
             {successMsg &&
              <div>
              <p className="text-center text-green-600">{successMsg}</p>
                <p className='text-center flex justify-center items-center gap-2'>Redirecting to Home <AiOutlineLoading className='animate-spin'/></p>
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
                  className="h-10 w-10 object-contain cursor-pointer"
                  src={google}
                  alt="google"
                />
                <p>Continue with Google</p>
              </div>
            </button>
            <p className="text-gray-500 text-left mt-4 text-[1em]">
              Don&apos;t have an account?{' '}
              <button onClick={onSignUpClick} className="underline  cursor-pointer text-[#15278c]">
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
