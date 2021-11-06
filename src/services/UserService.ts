import axios from '@/apiClient';
import LoginInputInterface from '@/types/LoginPayloadInterface';
import LoginRegisterResponseInterface from '@/types/LoginRegisterResponseInterface';
import UserInterface from '@/types/UserInterface';

const loginApiUrl = 'users/login';
const registerApiUrl = 'users/register';
const loggedInUserApiUrl = 'users/me';

class UserService {
    login(loginPayload: LoginInputInterface): Promise<LoginRegisterResponseInterface> {
        return axios.post(loginApiUrl, loginPayload);
    }

    register(userPayload: UserInterface): Promise<LoginRegisterResponseInterface> {
        return axios.post(registerApiUrl, userPayload);
    }

    getLoggedInUser(): Promise<any> {
        return axios.get(loggedInUserApiUrl);
    }
}

export default new UserService();
