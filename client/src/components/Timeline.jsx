import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import { steps } from '../constants/data';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../app/slices/stepSlice';
import useReset from '../controllers/useReset';
import MorningSetupComponent from './MorningSetupComponent';
import UnlockScriptComponent from './UnlockScriptComponent';
import StepNavButton from './StepNavButton';

const Timeline = () => {
  const dispatch = useDispatch();

  const stepIndex = useSelector((state) => state.step.value);

  const handleReset = useReset();

  return (
    <div className="w-full px-8 md:px-6 lg:px-4 xl:px-2">
      <Stepper activeStep={stepIndex} orientation="vertical">
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
              onClick={() => dispatch(navigate(index))}
            >
              <p className={`${index <= stepIndex ? "font-bold" : ""} cursor-pointer`}>
                {step.label}
              </p>
            </StepLabel>

            <StepContent>
              {
                index === 1 ?
                  <MorningSetupComponent />
                  :
                  index === 7 ?
                    <UnlockScriptComponent />
                    :
                    <p className="text-sm font-normal">
                      {step.description}
                    </p>
              }

              <div className="mb-2 mt-2 flex gap-2">
                <StepNavButton buttonType="next" index={index} />
                <StepNavButton buttonType="prev" index={index} />
              </div>
            </StepContent>

          </Step>
        ))}
      </Stepper>

      {stepIndex === steps.length && (
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
