import React,{useState,useEffect} from 'react'
import { useGlobalContext } from '../../context'

const Account = () => {
    const {currentUser,handleChangeAccount} = useGlobalContext();

    const [isInfo,setIsInfo] = useState(true)
    const [isTogglePass,setIsTogglePass] = useState(false);
    const [curUser,setCurUser] = useState({})
    const [togglePassword,setTogglePassword] = useState({oldPass:'',
                                                    newPass:'',
                                                    newPassChecked:''})
    const [errOldPass,setErrOldPass] = useState({isErr:false,message:''})
    const [errNewPass,setErrNewPass] = useState({isErr:false,message:''})
    const [errPassChecked,setErrPassChecked] = useState({isErr:false,message:''})
    // console.log(currentUser)

    const checkPass = (password) => {
        if(curUser.password !== password){
            setErrOldPass(() => {
                    return{
                        isErr:true,
                        message:'Password không chính xác!!'
                    }
                })
                let oldPass = document.querySelector('#old-pass');
                oldPass.classList.add('is-err')
        }
    }

    const handleClickChangeAccount = () => {
        if(!isTogglePass){
            handleChangeAccount(curUser,curUser.password)
            alert('Cập nhật tài khoản thành công!!')
        }
        else{
            checkPass(togglePassword.oldPass);
            if(togglePassword.oldPass === ''){
                setErrOldPass(() => {
                    return{
                        isErr:true,
                        message:'Vui lòng nhập Password!!'
                    }
                })
                let oldPass = document.querySelector('#old-pass');
                oldPass.classList.add('is-err')
            }
            // new pass
            if(togglePassword.newPass === ''){
                setErrNewPass(() => {
                    return{
                        isErr:true,
                        message:'Vui lòng nhập Password mới!!'
                    }
                })
                let newPass = document.querySelector('#new-pass');
                newPass.classList.add('is-err')
            }
            // check
            if(togglePassword.newPassChecked !== togglePassword.newPass){
                setErrPassChecked(() => {
                    return{
                        isErr:true,
                        message:'Password mới không chính xác!!'
                    }
                })
                let checkPass = document.querySelector('#check-pass');
                checkPass.classList.add('is-err')
            }
            if(togglePassword.newPassChecked === ''){
                setErrPassChecked(() => {
                    return{
                        isErr:true,
                        message:'Vui lòng nhập lại Password mới!!'
                    }
                })
                let checkPass = document.querySelector('#check-pass');
                checkPass.classList.add('is-err')
            }
            if(togglePassword.newPass===togglePassword.newPassChecked && togglePassword.oldPass===curUser.password && errOldPass.isErr===false && errNewPass.isErr===false && errPassChecked.isErr===false){
                handleChangeAccount(curUser,togglePassword.newPass)
                alert('Cập nhật tài khoản thành công!!')
                setTogglePassword((prev) => {
                    return{
                        ...prev,
                        newPass:'',
                        oldPass:'',
                        newPassChecked:''
                    }
                })
            }
        }
    }

    

    useEffect(() => {
        if(togglePassword.newPass !== ''){
            setErrNewPass(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let newPass = document.querySelector('#new-pass');
            newPass.classList.remove('is-err')
        }
    },[togglePassword.newPass])

    useEffect(() => {
        if(togglePassword.oldPass !== ''){
            setErrOldPass(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let oldPass = document.querySelector('#old-pass');
            oldPass.classList.remove('is-err')
        }
    },[togglePassword.oldPass])

    useEffect(() => {
        if(togglePassword.newPassChecked !== ''){
            setErrPassChecked(() => {
                return{
                    isErr:false,
                    message:''
                }
            })
            let checkPass = document.querySelector('#check-pass');
            checkPass.classList.remove('is-err')
        }
    },[togglePassword.newPassChecked])
    
    useEffect(() => {
        const {name,phone,email,address,password} = currentUser;
        setCurUser(() => {
            return{
                name,
                phone,
                email,
                address,
                password
            }
        })
    }, [currentUser])
    return (
        <section className='screen-default account-page'>
            <div className='account-page-wrap'>
                <div className='sidebar-account-wrap'>
                    <div className='sidebar-account'>
                        <h3>{currentUser.name}</h3>
                        <div className='option-account'>
                            <div className='sidebar-account-item is-active'>
                                Thông tin cá nhân
                            </div>
                            <div className='sidebar-account-item'>
                                Danh sách đơn hàng
                            </div>
                            <div className='sidebar-account-item'>
                                Thoát
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content-account'>
                    {isInfo &&
                        <div className='info-account'>
                            <h3>Thông tin tài khoản</h3>
                            <div className='info-account-item'>
                                <div className='title-info'>
                                    Họ tên
                                </div>
                                <div className='content-info'>
                                    <input type='text' placeholder='Tên của bạn' value={curUser.name} onInput={(e) => setCurUser((prev) => {
                                        return{
                                            ...prev,
                                            name: e.target.value
                                        }
                                    })}/>
                                </div>
                            </div>
                            <div className='info-account-item'>
                                <div className='title-info'>
                                    Số điện thoại
                                </div>
                                <div className='content-info'>
                                    <input type='text' placeholder='SĐT của bạn' value={curUser.phone}/>
                                </div>
                            </div>
                            <div className='info-account-item'>
                                <div className='title-info'>
                                    Email
                                </div>
                                <div className='content-info'>
                                    <input type='email' placeholder='Email của bạn' value={curUser.email}/>
                                </div>
                            </div>
                            <div className='info-account-item'>
                                <div className='title-info'>
                                    Địa chỉ
                                </div>
                                <div className='content-info'>
                                    <input type='text' placeholder='Địa chỉ của bạn' value={curUser.address} onInput={(e) => setCurUser((prev) => {
                                        return{
                                            ...prev,
                                            address:e.target.value
                                        }
                                    })}/>
                                </div>
                            </div>
                            <div className='pass-toggle' onClick={() => setIsTogglePass(!isTogglePass)}>
                                Thay đổi mật khẩu
                            </div>
                            {isTogglePass && 
                            <div className='wrap-toggle'>
                                <div className='info-account-item'>
                                    <div className='title-info'>
                                        Mật khẩu cũ
                                    </div>
                                    <div className='content-info'>
                                        <input id='old-pass' type='password' placeholder='Mật khẩu cũ' value={togglePassword.oldPass} onInput={(e) => setTogglePassword((prev) => {
                                            return{
                                                ...prev,
                                                oldPass:e.target.value
                                            }
                                        })}/>
                                        {errOldPass.isErr && <span className='err'>{errOldPass.message}</span>}
                                    </div>
                                </div>
                                <div className='info-account-item'>
                                    <div className='title-info'>
                                        Mật khẩu mới
                                    </div>
                                    <div className='content-info'>
                                        <input id='new-pass' type='password' placeholder='Mật khẩu mới' value={togglePassword.newPass} onInput={(e) => setTogglePassword((prev) => {
                                            return{
                                                ...prev,
                                                newPass: e.target.value
                                            }
                                        })}/>
                                        {errNewPass.isErr && <span className='err'>{errNewPass.message}</span>}

                                    </div>
                                </div>
                                <div className='info-account-item'>
                                    <div className='title-info'>
                                        Nhập lại mật khẩu
                                    </div>
                                    <div className='content-info'>
                                        <input id='check-pass' type='password' placeholder='Nhập lại mật khẩu' value={togglePassword.newPassChecked} onInput={(e) => setTogglePassword((prev) => {
                                            return{
                                                ...prev,
                                                newPassChecked: e.target.value
                                            }
                                        })}/>
                                        {errPassChecked.isErr && <span className='err'>{errPassChecked.message}</span>}
                                    </div>
                                </div>
                            </div>
                            }
                            <div className='info-account-btn'>
                                <button type='button' onClick={() => handleClickChangeAccount()}>Cập nhật tài khoản</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Account
