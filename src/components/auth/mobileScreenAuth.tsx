import Login from "./login/login";
import Register from "./regis/register";

interface Props {
  setIsRegis : (value : boolean) => void
  isRegis : boolean
  isOpenPopup : boolean
}

export default function MobileScreenAuth(
  {
    setIsRegis,
    isRegis,
    isOpenPopup
  }:Props
) {
  return (
    <>
      {isOpenPopup && <div className="fixed inset-0 bg-black bg-opacity-50  z-40 transition-opacity duration-300" />}
      <div className={`fixed bottom-0 bg-[#18191B] ${isOpenPopup? 'translate-y-0 h-5/6' : 'translate-y-full'} transition-transform  w-full rounded-t-3xl z-50`}>
        <div className="flex justify-center">
          {isRegis? <Register setIsRegis={setIsRegis}/>
            :
            <Login setIsRegis={setIsRegis}/>
          }  
        </div>
      </div>
    </>
  );
}
