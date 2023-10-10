import { NavLink } from "react-router-dom"
import moment from 'moment';


const Navbar = () => {
  return (
    <div>

        <nav className="flex p-8 mx-2.5 justify-between items-center">
            <img className="w-1/12 h-25" src="https://i.ibb.co/6Jt30Yw/Untitled-design.png" alt="" />
           <div>
           <ul className="flex gap-5">
                <li>
            
                <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending " : isActive ? "text-red-500 underline font-bold" : ""
  }
>
  Home
                </NavLink>


                </li>
                <li>
            
                <NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "pending text-lg" : isActive ? "text-red-500 underline font-bold" : ""
  }
>
  About us
                </NavLink>


                </li>
                <li>
            
            <NavLink
to="/offer"
className={({ isActive, isPending }) =>
isPending ? "pending " : isActive ? "text-red-500 underline font-bold" : ""
}
>
Review
            </NavLink>


            </li>
            <li>
                <NavLink to='tips'
  
  className={({ isActive, isPending }) =>
    isPending ? "pending text-lg" : isActive ? "text-red-500 underline font-bold" : ""
  }
>
  Tips
                </NavLink>
                </li>
                <li>
            
            <NavLink
to="/register"
className={({ isActive, isPending }) =>
isPending ? "pending " : isActive ? "text-red-500 underline font-bold" : ""
}
>
Register
            </NavLink>


            </li>
            <li>
            
                <NavLink
  to="/contact"
  className={({ isActive, isPending }) =>
    isPending ? "pending text-lg" : isActive ? "text-red-500 underline font-bold" : ""
  }
>
  Contact us
                </NavLink>
                


                </li>
           
            </ul>
           </div>
           <div>
            <NavLink to='/login'><button className="text-lg font-semibold text-blue-400">Login</button></NavLink>
           </div>
            
           
        </nav> 
        <p className="text-base text-center -mt-10 ">{moment().format("dddd, MMMM D YYYY")}</p>
        <br /> <br />
    </div>
    
  )
}

export default Navbar