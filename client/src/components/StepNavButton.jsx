import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from '../app/slices/stepSlice';

const StepNavButton = ({ buttonType, index }) => {
  const dispatch = useDispatch();
  if (buttonType === "next") {
    return (
      <button
        className="bg-[#4285F4] hover:bg-[#3a78e2] text-white py-1.5 px-3 rounded-md mt-1 transition"
        variant="contained"
        onClick={() => dispatch(increment())}
      >
        {index === 6 ? 'Done' : 'Continue'}
      </button>
    )
  } else if (buttonType === "prev") {
    return (
      <button
        className={`bg-white ${index === 0 ? "opacity-50" : "hover:bg-zinc-100"} text-[#4285F4] py-1.5 px-3 rounded-md mt-1 transition`}
        disabled={index === 0}
        onClick={() => dispatch(decrement())}
      >
        Back
      </button>
    )
  }
}

export default StepNavButton