import axios from '@/apiClient';
import LoginInputInterface from '@/types/LoginPayloadInterface';
import LoginSignupResponseInterface from '@/types/LoginSignupResponseInterface';
import UserInterface from '@/types/UserInterface';

const loginApiUrl = 'users/login';
const signupApiUrl = 'users/register';
const loggedInUserApiUrl = 'users/me';

class UserService {
    login(loginPayload: LoginInputInterface): Promise<LoginSignupResponseInterface> {
        return axios.post(loginApiUrl, loginPayload);
    }

    signup(userPayload: UserInterface): Promise<LoginSignupResponseInterface> {
        return axios.post(signupApiUrl, userPayload);
    }

    getLoggedInUser(): Promise<any> {
        return axios.get(loggedInUserApiUrl);
    }
}

export default new UserService();
