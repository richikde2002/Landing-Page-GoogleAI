import React from 'react'
import useMorningSetup from '../controllers/useMorningSetup'
import { useSelector } from 'react-redux';
import SuspenseImg from './SuspenseImg';

const MorningSetupComponent = () => {
  const handleMorningSetup = useMorningSetup();

  const morningUrl = useSelector((state) => state.morningSetup.morningUrl);
  const morningLoading = useSelector((state) => state.morningSetup.morningLoading);

  return (
    <div>
      <p className="text-sm">Click here : 
        <button
          onClick={handleMorningSetup}
          className="bg-slate-700 hover:bg-[#3a78e2] text-white rounded-md mx-1.5 px-1.5 pb-0.5 transition"
        >
          {morningLoading ?
            <div className="flex justify-center items-center gap-2">
              <p>Loading</p>
              <div className="animate-spin h-3 w-3 border-t-white border-t-2 rounded-full"></div>
            </div>
            :
            "PIN"}
        </button>

        to generate a QR Code.
      </p>


      {morningUrl &&
        <div className="m-2 p-2 bg-zinc-200 rounded-md border-[1px] border-zinc-300 inline-block">
          <SuspenseImg src={morningUrl} className="h-64 w-64 rounded-md" />
        </div>
      }

    </div>
  )
}

export default MorningSetupComponent