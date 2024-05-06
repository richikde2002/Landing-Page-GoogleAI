import axios from 'axios';
import { useDispatch } from 'react-redux';
import { startUnlockLoading, endUnlockLoading, unlockRanOnce } from '../app/slices/unlockScriptSlice';
import { toast } from 'react-hot-toast'

const useUnlockScript = () => {
    const dispatch = useDispatch();

    const handleUnlockScript = async () => {
        dispatch(startUnlockLoading());
        try {
            const res = await axios.get("api/script/UnlockScript");
        } catch (error) {
            console.error('Error: ', error);
        } finally {
            dispatch(endUnlockLoading());
            dispatch(unlockRanOnce());
            toast.success('Unpinned');
        }
    }

    return handleUnlockScript;
};

export default useUnlockScript;
