import { useLocation, useNavigate} from "react-router"

export default function () {
  const location = useLocation()
  const navigate = useNavigate()
  
  function pathMathRoute(route){
    console.log(`Comparing: ${route} with ${location.pathname}. Result: ${route === location.pathname}`);
    return route === location.pathname
  }

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
    <header className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
    <div>
        <img src="/img.png" alt='logo' className='cursor-pointer' onClick={()=> navigate("/")}/>
    </div>
    <div>
        <ul className='flex space-x-10'>
            <li 
           className={`
            cursor-pointer py-3 text-sm font-semibold border-b-[3px]
            ${pathMathRoute("/") ? "border-b-red-500 text-black": "border-b-transparent text-gray-400"}
          `}
            onClick={() => navigate("/")}>
            Home
            </li>
            <li 
            className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px]  
            ${pathMathRoute("/offers") ? "border-b-red-500 text-black": "border-b-transparent text-gray-400"}`}
            onClick={() => navigate("/offers")}>
            Offers
            </li>
            <li 
            className={`cursor-pointer py-3 text-sm font-semibold  border-b-[3px] 
            ${pathMathRoute("/sign-in") ? "border-b-red-500 text-black": "border-b-transparent text-gray-400"}`}
            onClick={() => navigate("/sign-in")}>
            SignIn
            </li>
        </ul>
    </div>

    </header>

    </div>
  )
}
