import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
// import Search from '../components/Search'
import Logo from '../assets/images/logo.png'
import Search from '../components/Search';


function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const login = window.location.toString().includes("login")
  const register = window.location.toString().includes("register")
  const home = window.location.toString().includes("home")
  const profile = window.location.toString().includes("profile")
  const welcome = window.location.toString().includes("welcome")
  const wedding = window.location.toString().includes("wedding")
  const birthday = window.location.toString().includes("birthday")
  const barMitzva = window.location.toString().includes("barMitzva")
  const circumcision = window.location.toString().includes("circumcision")

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  const goProfile = () => {
    navigate('/profile')
  }
  const goHome = () => {
    navigate('/home')
  }
  const goWelcome = () => {
    navigate('/welcome')
  }
  

  return (
    <header className='header'>
      
      <div className='logo'>
        <img src={Logo} width={120} height={60} alt="logo" onClick={goHome}/>

      </div>
      <ul>
        {user ? (
          <ul>
            <li>
             <Search/>
             </li>
           <li>
            {welcome || home || circumcision || barMitzva || birthday || wedding ? <button className='btn' onClick={goProfile}> פרופיל </button> : <></>}
         </li>
         <li>
            {profile || home || circumcision || barMitzva || birthday || wedding ? <button className='btn' onClick={goWelcome}> ראשי </button> : <></>}
         </li>
         <li>
            <button className='btn' onClick={onLogout}>
              התנתקות
            </button>
          </li>
         </ul>
        ) : (
          <>
            {home ?
              <>
              
                <li>
                  <Link to='/login'>
                  <button className='btn'>
                    התחברות
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to='/register'>
                  <button className='btn'>
                    הרשמה
                    </button>
                  </Link>
                </li>
              </>
              :
              <>
                {register ?
                  <li>
                    <Link to='/login'>
                    <button className='btn'>
                      התחברות
                      </button>
                    </Link>
                  </li>
                  :
                  <></>
                }
                {login ?
                  <li>
                    <Link to='/register'>
                    <button className='btn'>
                      הרשמה
                      </button>
                    </Link>
                  </li>
                  :
                  <></>
                }</>
            }

          </>
        )}
      </ul>

    </header>
  )
}

export default Header
