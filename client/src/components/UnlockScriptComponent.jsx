import React from 'react'
import useUnlockScript from '../controllers/useUnlockScript'
import { useSelector } from 'react-redux';

const UnlockScriptComponent = () => {
  const handleUnlockScript = useUnlockScript();

  const unlockLoading = useSelector((state) => state.unlockScript.unlockLoading);
  const unlockRan = useSelector((state) => state.unlockScript.unlockRan);

  return (
    <div>
      <p className="text-sm">
        Please see: If you want to UNPIN your Consumer app in the Tablet, Click here :
        <button
          onClick={handleUnlockScript}
          className="bg-slate-700 hover:bg-[#3a78e2] text-white rounded-md mx-1.5 px-1.5 pb-0.5 transition"
        >
          {unlockLoading ?
            <div className="flex justify-center items-center gap-2">
              <p>Loading</p>
              <div className="animate-spin h-3 w-3 border-t-white border-t-2 rounded-full"></div>
            </div>
            :
            "Unlock Script"}
        </button>
      </p>

      {/* {unlockRan && <div className='bg-green-500 text-white mx-auto text-center py-1 px-4 rounded-lg mt-4'>
        <p className='font-semibold text-md'>Unpinned!</p>
      </div>} */}
    </div>
  )
}

export default UnlockScriptComponent