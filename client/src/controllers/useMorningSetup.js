import axios from 'axios';
import { useDispatch } from 'react-redux';
import { startMorningLoading, endMorningLoading, setMorningUrl } from '../app/slices/morningSetupSlice';
import { toast } from 'react-hot-toast';

const useMorningSetup = () => {
    const dispatch = useDispatch();

    const handleMorningSetup = async () => {
        dispatch(startMorningLoading());
        try {
            const response = await axios.get("api/script/morningSetup");
            dispatch(setMorningUrl(response.data));
        } catch (error) {
            console.error('Error: ', error);
        } finally {
            dispatch(endMorningLoading());
            toast.success('Pinned');
        }
    }

    return handleMorningSetup;
};

export default useMorningSetup;
