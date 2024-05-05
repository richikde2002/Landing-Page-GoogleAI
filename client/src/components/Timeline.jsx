import React, { useState } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import axios from 'axios';
import { steps } from '../constants/data';

const SuspenseImg = ({ src, ...rest }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="relative">
      {!imageLoaded && (
        <div className="h-64 w-64 rounded-md bg-white flex justify-center items-center">
          <div className="border-t-4 border-t-[#4285F4] rounded-full animate-spin h-16 w-16"></div>
        </div>
      )}
      <img src={src} onLoad={handleImageLoad} style={{ display: imageLoaded ? 'block' : 'none' }} {...rest} />
    </div>
  );
};

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNavigate = (index) => {
    setActiveStep(index)
  }

  const handleReset = () => {
    setMorningUrl(null);
    setUnlockRan(false);
    setActiveStep(0);
  };

  const [morningUrl, setMorningUrl] = useState(null)
  const [morningLoading, setMorningLoading] = useState(false)

  const handleMorningSetup = async () => {
    setMorningLoading(true);
    try {
      // const response = await axios.get("http://3.110.204.189/script/?scriptname=morningSetup");
      const response = await axios.get("api/script/morningSetup");
      // console.log(response.data);
      setMorningUrl(response.data);
    } catch (error) {
      console.error('Error: ', error);
    } finally {
      setMorningLoading(false);
    }
  }

  const [unlockLoading, setUnlockLoading] = useState(false)
  const [unlockRan, setUnlockRan] = useState(false)

  const handleUnlockScript = async () => {
    setUnlockLoading(true);
    try {
      // const response = await axios.get("http://3.110.204.189/script/?scriptname=UnlockScript");
      const response = await axios.get("api/script/UnlockScript");
      // setUnlockUrl(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error('Error: ', error);
    } finally {
      setUnlockLoading(false);
      setUnlockRan(true);
    }
  }

  return (
    <div className="w-full px-8 md:px-6 lg:px-4 xl:px-2">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>

            <StepLabel
              optional={
                step.optionalLabel ? (
                  <p className="text-xs font-semibold">
                    {step.optionalLabel}
                  </p>
                ) : null
              }
              onClick={() => handleNavigate(index)}
            >
              <p className={`${index <= activeStep ? "font-bold" : ""} cursor-pointer`}>
                {step.label}
              </p>
            </StepLabel>

            <StepContent>


              {index === 1 ?
                <div>
                  <p className="text-sm">Click on the

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
                        "Morning Script"}
                    </button>

                    button to generate a QR Code in the new tab
                  </p>


                  {morningUrl &&
                    <div className="m-2 p-2 bg-zinc-200 rounded-md border-[1px] border-zinc-300 inline-block">
                      <SuspenseImg src={morningUrl} className="h-64 w-64 rounded-md" />
                    </div>
                  }

                </div>
                :
                index === 7 ?
                  <div>

                    <p className="text-sm">
                      Please see: If you want to UNPIN your Consumer app in the Tablet, Clicker here :
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

                      {unlockRan && <div className='bg-green-500 text-white mx-auto max-w-48 text-center py-2 rounded-lg mt-4'>
                        <p className='font-semibold'>Script Ran Successfully</p>
                      </div>}
                    </p>

                    {/* {unlockUrl &&
                      <div className="m-2 p-2 bg-zinc-200 rounded-md border-[1px] border-zinc-300 inline-block">
                        <SuspenseImg src={unlockUrl} className="h-64 w-64 rounded-md" />
                      </div>
                    } */}


                  </div>
                  :
                  <p className="text-sm font-normal">
                    {step.description}
                  </p>}

              {/* {step.imageUrl && <div className="m-2 p-2 bg-zinc-200 rounded-md border-[1px] border-zinc-300">
                <img src={step.imageUrl} alt={step.label} className="rounded-md border-[1px] border-zinc-300" />
              </div>} */}

              <div className="mb-2 mt-2 flex gap-2">
                <button
                  className="bg-[#4285F4] hover:bg-[#3a78e2] text-white py-1.5 px-3 rounded-md mt-1 transition"
                  variant="contained"
                  onClick={handleNext}
                >
                  {index === steps.length - 1 ? 'Done' : 'Continue'}
                </button>
                <button
                  className="bg-white hover:bg-zinc-100 text-[#4285F4] py-1.5 px-3 rounded-md mt-1 transition"
                  disabled={index === 0}
                  onClick={handleBack}
                >
                  Back
                </button>
              </div>
            </StepContent>

          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <div className="w-full flex flex-col justify-center items-start px-4 py-2">
          <h2>All steps completed - you&apos;re finished</h2>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </div>
      )}
    </div>
  )
}

export default Timeline
