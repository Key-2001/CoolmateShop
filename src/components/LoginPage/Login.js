import React,{useState,useEffect} from 'react'
import {AiOutlineClose} from "react-icons/ai"
import { useGlobalContext } from '../../context'

const Login = () => {

    const {isLoginPage,setIsLoginPage,handleAddAccount,accounts,isRegisterNotify,setIsRegisterNotify,handleCheckLogin,isUser,handleChangePassword} = useGlobalContext();
    // register
    const [account,setAccount] = useState({name:'',
                                            phone:'',
                                            email:'',
                                            password:'',
                                            passwordChecked:'',
                                            address:''})

    const [errName,setErrName] = useState({isErr: false,message:''})
    const [errPhone,setErrPhone] = useState({isErr: false,message:''})
    const [errEmail,setErrEmail] = useState({isErr: false,message:''})
    const [errPass,setErrPass] = useState({isErr:false,message:''})
    const [errPassChecked,setErrPassChecked] = useState({isErr:false,message:''})
    // login
    const [user,setUser] = useState({phone:'',
                                    password:''})
    // forgot
    const [forgotPass,setForgotPass] = useState({phone:'',
                                                newPass:'',
                                                newPassChecked:''})


    const handleErrFormPhone = (data) => {
        setIsRegisterNotify(false)
        let arr = data.split('');
        arr.forEach((item,index) => {
            let temp =  parseInt(item);
            // console.log(parseInt(item),Boolean(temp))
            if(!Boolean(temp) && temp !== 0){
                // console.log('haha',Boolean(temp))
                setErrPhone(() => {
                    return{
                        isErr:true,
                        message:'Số điện thoại không hợp lệ!',
                    }
                })
                let phoneInput = document.querySelector('#phone-register');
                phoneInput.classList.add('is-err')
            }
        })
        if(arr.length !== 10){
            setErrPhone(() => {
                    return{
                        isErr:true,
                        message:'Số điện thoại không hợp lệ!',
                    }
                })
            let phoneInput = document.querySelector('#phone-register');
            phoneInput.classList.add('is-err')
        }
        accounts.forEach((item,index) => {
            if(item.phone === data){
                setErrPhone(() => {
                    return{
                        isErr:true,
                        message:'Số điện thoại đã tồn tại!',
                    }
                })
                let phoneInput = document.querySelector('#phone-register');
                phoneInput.classList.add('is-err')
            }
        })
    }
    
    const handleClickRegister =(e) => {
        e.preventDefault();
        // name
        if(account.name === ''){
            setErrName(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập tên này!'
                }
            })
            let nameInput = document.querySelector('#name-register');
            nameInput.classList.add('is-err')
        }
        // phone
        handleErrFormPhone(account.phone);
        if(account.phone === ''){
            setErrPhone(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập SĐT này!'
                }
            })
            let phoneInput = document.querySelector('#phone-register');
            phoneInput.classList.add('is-err')
        }
        // email
        if(account.email.indexOf('@') === -1){
            setErrEmail(() => {
                return{
                    isErr:true,
                    message:'Email không hợp lệ!!'
                }
            })
            let emailInput = document.querySelector('#email-register');
            emailInput.classList.add('is-err')
        }
        if(account.email === ''){
            setErrEmail(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập Email!!'
                }
            })
            let emailInput = document.querySelector('#email-register');
            emailInput.classList.add('is-err')
        }
        // password
        if(account.password.length<6 || account.password.length>12){
            setErrPass(() => {
                return{
                    isErr:true,
                    message:'Password phải 6-12 kí tự!!'
                }
            })
            let passInput = document.querySelector('#pass-register');
            passInput.classList.add('is-err')
        }
        if(account.password === ''){
            setErrPass(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập Password!!'
                }
            })
            let passInput = document.querySelector('#pass-register');
            passInput.classList.add('is-err')
        }
        // check password
        if(account.passwordChecked === ''){
            setErrPassChecked(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập lại Password!!'
                }
            })
            let passCheckedInput = document.querySelector('#passChecked-register');
            passCheckedInput.classList.add('is-err')
        }
        if(account.passwordChecked !== account.password){
            setErrPassChecked(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập lại Password!!'
                }
            })
            let passCheckedInput = document.querySelector('#passChecked-register');
            passCheckedInput.classList.add('is-err')
        }
        // add account
        
        if(account.password.length>5 && account.password.length<13 && account.name!=='' && errName.isErr===false && errPhone.isErr===false && errEmail.isErr===false && errPass.isErr===false && errPassChecked.isErr===false){
            console.log(account)
            handleAddAccount(account)
        }
        
    }

    useEffect(() => {
        if(account.name !== ''){
            setErrName(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let nameInput = document.querySelector('#name-register');
            nameInput.classList.remove('is-err')
        }
    },[account.name])

    useEffect(() => {
        
        if(account.phone !== ''){
            setErrPhone(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let phoneInput = document.querySelector('#phone-register');
            phoneInput.classList.remove('is-err')
        }
    },[account.phone])

    useEffect(() => {
        if(account.email !== ''){
            setErrEmail(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let emailInput = document.querySelector('#email-register');
            emailInput.classList.remove('is-err')
        }
    },[account.email])

    useEffect(() => {
        if(account.password !== ''){
            setErrPass(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let passInput = document.querySelector('#pass-register');
            passInput.classList.remove('is-err')
        }
    },[account.password])

    useEffect(() => {
        if(account.passwordChecked !== ''){
            setErrPassChecked(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let passCheckedInput = document.querySelector('#passChecked-register');
            passCheckedInput.classList.remove('is-err')
        }
    },[account.passwordChecked])

    useEffect(() => {
        setIsRegisterNotify(false)
    },[account])
    
    const checkPhone = (data,id) => {
        let arr = data.split('');
        arr.forEach((item,index) => {
            let temp =  parseInt(item);
            // console.log(parseInt(item),Boolean(temp))
            if(!Boolean(temp) && temp !== 0){
                // console.log('haha',Boolean(temp))
                setErrPhone(() => {
                    return{
                        isErr:true,
                        message:'Số điện thoại không hợp lệ!',
                    }
                })
                let phoneInput = document.querySelector(`#${id}`);
                phoneInput.classList.add('is-err')
            }
        })
        if(arr.length !== 10){
            setErrPhone(() => {
                    return{
                        isErr:true,
                        message:'Số điện thoại không hợp lệ!',
                    }
                })
            let phoneInput = document.querySelector(`#${id}`);
            phoneInput.classList.add('is-err')
        }
        // check account
        else if(accounts.length === 0){
            setErrPhone(() => {
                    return{
                        isErr:true,
                        message:'Số điện thoại không tồn tại!',
                    }
                })
            let phoneInput = document.querySelector(`#${id}`);
            phoneInput.classList.add('is-err')
        }
        else{
            accounts.forEach((item,index) => {
                if(item.phone !== data){
                    setErrPhone(() => {
                        return{
                            isErr:true,
                            message:'Số điện thoại không tồn tại!',
                        }
                    })
                let phoneInput = document.querySelector(`#${id}`);
                phoneInput.classList.add('is-err')
                }
            })
        }
    }
    const checkPass = (data) => {
        accounts.forEach((item,index) => {
            if(item.phone === data.phone){
                if(item.password !== data.password){
                    setErrPass(() => {
                        return{
                            isErr:true,
                            message:'Password không chính xác!!'
                    }
                })
                let passInput = document.querySelector('#pass-login');
                passInput.classList.add('is-err')
                }
            }
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        // phone
        checkPhone(user.phone,'phone-login');
        if(user.phone === ''){
            setErrPhone(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập SĐT này!'
                }
            })
            let phoneInput = document.querySelector('#phone-login');
            phoneInput.classList.add('is-err')
        }
        // password
        checkPass(user)
        if(user.password === ''){
            setErrPass(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập Password!!'
                }
            })
            let passInput = document.querySelector('#pass-login');
            passInput.classList.add('is-err')
        }
        if(user.phone!=='' && user.password!=='' && errPhone.isErr===false && errPass.isErr===false){
            console.log(user)
            handleCheckLogin(user)
        }
    }
    
    useEffect(() => {
        if(user.phone !== ''){
            setErrPhone(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let phoneInput = document.querySelector('#phone-login');
            phoneInput.classList.remove('is-err')
        }
    },[user.phone])
    useEffect(() => {
        if(user.password !== ''){
            setErrPass(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let passInput = document.querySelector('#pass-login');
            passInput.classList.remove('is-err')
        }
    },[user.password])

    useEffect(() => {
        if(isUser === true){
            setIsLoginPage((prev) => {
                return{
                    ...prev,
                    isLogin:false,
                    isRegister:false,
                    isForgotPass:false
                }
            })
        }
    },[isUser])
    // handle forgot pass

    const handleClickForgotPass = (e) => {
        e.preventDefault()
        checkPhone(forgotPass.phone,'phone-forgot');
        if(forgotPass.phone === ''){
            setErrPhone(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập SĐT !'
                }
            })
            let phoneInput = document.querySelector('#phone-forgot');
            phoneInput.classList.add('is-err')
        }
        // pass
        if(forgotPass.newPass === ''){
            setErrPass(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập Password mới!!'
                }
            })
            let passInput = document.querySelector('#pass-forgot');
            passInput.classList.add('is-err')
        }
        // check pass
        if(forgotPass.newPass !== forgotPass.newPassChecked){
            setErrPassChecked(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập lại Password!!'
                }
            })
            let passCheckInput = document.querySelector('#passCheck-forgot');
            passCheckInput.classList.add('is-err')
        }
        if(forgotPass.newPassChecked === ''){
            setErrPassChecked(() => {
                return{
                    isErr:true,
                    message:'Vui lòng nhập lại Password!!'
                }
            })
            let passCheckInput = document.querySelector('#passCheck-forgot');
            passCheckInput.classList.add('is-err')
        }
        if(forgotPass.phone!=='' && forgotPass.newPass!=='' && forgotPass.newPass===forgotPass.newPassChecked && errPhone.isErr===false && errPass.isErr===false && errPassChecked.isErr===false){
            handleChangePassword(forgotPass)
            alert('Thay đổi mật khẩu thành công!!');
            setForgotPass((prev) => {
            return{
                ...prev,
                phone:'',
                newPass:'',
                newPassChecked:''
            }
        })
        }

    }

    useEffect(() => {
        if(forgotPass.phone !== ''){
            setErrPhone(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let phoneInput = document.querySelector('#phone-forgot');
            phoneInput.classList.remove('is-err')
        }
    },[forgotPass.phone])

    useEffect(() => {
        if(forgotPass.newPass !== ''){
            setErrPass(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let passInput = document.querySelector('#pass-forgot');
            passInput.classList.remove('is-err')
        }
    },[forgotPass.newPass])

    useEffect(() => {
        if(forgotPass.phone !== ''){
            setErrPassChecked(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let passCheck = document.querySelector('#passCheck-forgot');
            passCheck.classList.remove('is-err')
        }
    },[forgotPass.newPassChecked])

    useEffect(() => {
        setAccount((prev) => {
            return{
                ...prev,
                name:'',
                phone:'',
                email:'',
                password:'',
                passwordChecked:'',
                address:''
            }
        })
        setErrName((prev) => {
            return{
                ...prev,
                isErr:false,
                message:''
            }
        })
        setErrEmail((prev) => {
            return{
                ...prev,
                isErr:false,
                message:''
            }
        })
        setErrPhone((prev) => {
            return{
                ...prev,
                isErr:false,
                message:''
            }
        })
        setErrPass((prev) => {
            return{
                ...prev,
                isErr:false,
                message:''
            }
        })
        setErrPassChecked((prev) => {
            return{
                ...prev,
                isErr:false,
                message:''
            }
        })
        setUser((prev) => {
            return{
                ...prev,
                phone:'',
                password:''
            }
        })
        setForgotPass((prev) => {
            return{
                ...prev,
                phone:'',
                newPass:'',
                newPassChecked:''
            }
        })
    },[isLoginPage])

    return (
    <>
        {isLoginPage.isLogin && <div className='login-wrap'>
            <div className='background-login'/>
            <div className='login-content'>
                <span className='btn-close' onClick={() => setIsLoginPage((prev) => {
                    return{
                        ...prev,
                        isLogin:false
                    }
                })}>
                    <AiOutlineClose/>
                </span>
                <div>
                    <form id='login-form' className='form-login'>
                        <div className='header-form'>
                            <h3>Đăng nhập</h3>
                        </div>
                        <div  className='form-item-login'>
                            <input id='phone-login' type='text' placeholder='SĐT của bạn' name='phone' value={user.phone} onInput={(e) => setUser((prev) => {
                                return{
                                    ...prev,
                                    phone: e.target.value
                                }
                            })}/>
                            {errPhone.isErr && <span className='err'>{errPhone.message}</span>}

                        </div>
                        <div  className='form-item-login'>
                            <input id='pass-login' type='password' placeholder='Mật khẩu' name='current-password' value={user.password} onInput={(e) => setUser((prev) => {
                                return{
                                    ...prev,
                                    password:e.target.value 
                                }
                            })}/>
                            {errPass.isErr && <span className='err'>{errPass.message}</span>}
                        </div>
                        <div className='form-item-login'>
                            <button type='submit' className='btn-login' onClick={(e) => handleLogin(e)}>
                                Đăng nhập
                            </button>
                        </div>
                        <div className='login-or-divider'>
                            <span>Hoặc</span>
                        </div>
                        <div className='login-provider-facebook'>
                            <div className='login-provider-content'>
                                Đăng nhập với Facebook
                            </div>
                            <div className='login-provider-img'>
                                <img src='https://www.coolmate.me/images/facebook.svg' alt='facebook-icon'/>
                            </div>
                        </div>
                        <div className='login-provider-google'>
                            <div className='login-provider-content'>
                                Đăng nhập với Google
                            </div>
                            <div className='login-provider-img'>
                                <img src='https://www.coolmate.me/images/google.svg' alt='google-icon'/>
                            </div>
                        </div>
                    </form>
                    <div className='other-option'>
                        <a href='#' onClick={() => setIsLoginPage((prev) => {
                            return{
                                ...prev,
                                isLogin:false,
                                isRegister:true
                            }
                        })}>Đăng kí tài khoản mới</a>
                        <a href='#'onClick={() => setIsLoginPage((prev) => {
                            return{
                                ...prev,
                                isLogin:false,
                                isForgotPass:true
                            }
                        })}>Quên mật khẩu</a>

                    </div>
                </div>
            </div>
        </div>}
        {isLoginPage.isRegister && <div className='login-wrap'>
            <div className='background-login'/>
            <div className='login-content'>
                <span className='btn-close' onClick={() => setIsLoginPage((prev) => {
                    return{
                        ...prev,
                        isRegister:false
                    }
                })}>
                    <AiOutlineClose/>
                </span>
                <div>
                    <form id='login-form' className='form-login'>
                        <div className='header-form'>
                            <h3>Đăng ký tài khoản</h3>
                            {isRegisterNotify && <h5>Đăng ký thành công!! Vui lòng đăng nhập</h5>}
                        </div>
                        <div  className='form-item-login'>
                            <input id='name-register' type='text' placeholder='Tên của bạn' name='name' value={account.name} onInput={(e) => setAccount((prev) => {
                                return{
                                    ...prev,
                                    name: e.target.value,
                                }
                            })}/>
                            {errName.isErr && <span className='err'>{errName.message}</span>}
                        </div>
                        <div  className='form-item-login'>
                            <input id='phone-register' type='text' placeholder='SĐT của bạn' name='phone' value={account.phone} onInput={(e) => setAccount((prev) => {
                                return{
                                    ...prev,
                                    phone: e.target.value
                                }
                            })}/>
                            {errPhone.isErr && <span className='err'>{errPhone.message}</span>}
                        </div>
                        
                        <div  className='form-item-login'>
                            <input id='email-register' type='email' placeholder='Email của bạn' name='email' value={account.email} onInput={(e) => setAccount((prev) => {
                                return{
                                    ...prev,
                                    email: e.target.value
                                }
                            })}/>
                            {errEmail.isErr && <span className='err'>{errEmail.message}</span>}
                        </div>
                        <div  className='form-item-login'>
                            <input id='pass-register' type='password' placeholder='Mật khẩu' name='password' value={account.password} onInput={(e) => setAccount((prev) => {
                                return{
                                    ...prev,
                                    password:e.target.value
                                }
                            })}/>

                            {errPass.isErr && <span className='err'>{errPass.message}</span>}

                        </div>
                        <div  className='form-item-login'>
                            <input id='passChecked-register' type='password' placeholder='Nhập lại mật khẩu' name='password-check' value={account.passwordChecked} onInput={(e) => setAccount((prev) => {
                                return{
                                    ...prev,
                                    passwordChecked:e.target.value
                                }
                            })}/>
                            {errPassChecked.isErr && <span className='err'>{errPassChecked.message}</span>}

                        </div>
                        <div className='form-item-login'>
                            <button type='submit' className='btn-login' onClick={(e) => handleClickRegister(e)}>
                                Đăng ký
                            </button>
                        </div>
                        <div className='login-or-divider'>
                            <span>Hoặc</span>
                        </div>
                        <div className='login-provider-facebook'>
                            <div className='login-provider-content'>
                                Đăng nhập với Facebook
                            </div>
                            <div className='login-provider-img'>
                                <img src='https://www.coolmate.me/images/facebook.svg' alt='facebook-icon'/>
                            </div>
                        </div>
                        <div className='login-provider-google'>
                            <div className='login-provider-content'>
                                Đăng nhập với Google
                            </div>
                            <div className='login-provider-img'>
                                <img src='https://www.coolmate.me/images/google.svg' alt='google-icon'/>
                            </div>
                        </div>
                    </form>
                    <div className='other-option other-option-register'>
                        <a href='#' onClick={() => setIsLoginPage((prev) => {
                            return{
                                ...prev,
                                isLogin:true,
                                isRegister:false
                            }
                        })}>Đăng nhập</a>
                    </div>
                </div>
            </div>
        </div>}
        {isLoginPage.isForgotPass && <div className='login-wrap'>
            <div className='background-login'/>
            <div className='login-content'>
                <span className='btn-close' onClick={() => setIsLoginPage((prev) => {
                    return{
                        ...prev,
                        isForgotPass:false
                    }
                })}>
                    <AiOutlineClose/>
                </span>
                <div>
                    <form id='login-form' className='form-login'>
                        <div className='header-form'>
                            <h3>Lấy lại mật khẩu</h3>
                        </div>
                        <div  className='form-item-login'>
                            <input id='phone-forgot' type='text' placeholder='SĐT của bạn' name='phone' value={forgotPass.phone} onInput={(e) => setForgotPass((prev) => {
                                return{
                                    ...prev,
                                    phone: e.target.value
                                }
                            })}/>
                            {errPhone.isErr && <span className='err'>{errPhone.message}</span>}

                        </div>
                        
                        <div  className='form-item-login'>
                            <input id='pass-forgot' type='password' placeholder='Mật khẩu' name='password' value={forgotPass.newPass} onInput={(e) => setForgotPass((prev) => {
                                return{
                                    ...prev,
                                    newPass: e.target.value
                                }
                            })}/>
                            {errPass.isErr && <span className='err'>{errPass.message}</span>}

                        </div>
                        <div  className='form-item-login'>
                            <input id='passCheck-forgot' type='password' placeholder='Nhập lại mật khẩu' name='password-check' value={forgotPass.newPassChecked} onInput={(e) => setForgotPass((prev) => {
                                return{
                                    ...prev,
                                    newPassChecked: e.target.value
                                }
                            })}/>
                            {errPassChecked.isErr && <span className='err'>{errPassChecked.message}</span>}

                        </div>
                        <div className='form-item-login'>
                            <button type='submit' className='btn-login' onClick={(e) => handleClickForgotPass(e)}>
                                Lấy lại mật khẩu
                            </button>
                        </div>
                    </form>
                    <div className='other-option other-option-register'>
                        <a href='#' onClick={() => setIsLoginPage((prev) => {
                            return{
                                ...prev,
                                isLogin:true,
                                isForgotPass:false
                            }
                        })}>Đăng nhập</a>
                    </div>
                </div>
            </div>
        </div>}
    </>
    )
}

export default Login
