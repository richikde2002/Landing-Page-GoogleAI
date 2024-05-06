import { useDispatch } from 'react-redux';
import { reset } from '../app/slices/stepSlice';
import { clearMorningUrl } from '../app/slices/morningSetupSlice';
import { unlockReset } from '../app/slices/unlockScriptSlice';

const useReset = () => {
  const dispatch = useDispatch();

  const resetAll = () => {
    dispatch(reset());
    dispatch(clearMorningUrl());
    dispatch(unlockReset());
  };

  return resetAll;
};

export default useReset;
