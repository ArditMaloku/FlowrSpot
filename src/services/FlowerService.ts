import axios from '@/apiClient';
import FlowerResponse from '@/types/FlowerResponse';

const getFlowersApiUrl = 'flowers';

class FlowerService {
    getAll(page: number): Promise<FlowerResponse> {
        return axios.get(`${getFlowersApiUrl}?page=${page}`);
    }
}

export default new FlowerService();
