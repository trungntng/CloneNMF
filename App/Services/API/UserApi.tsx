import {ApisauceInstance, ApiResponse} from 'apisauce';
import {User} from 'App/Models/User';

export interface UserApiInterface {
  signIn: () => Promise<ApiResponse<User>>;
}

const signIn = async (api: ApisauceInstance) => {
  const response = await api.get<User>(
    'https://5efedf61d18ced0016e40c53.mockapi.io/api/v1/users/1',
  );
  return response;
};

export default (api: ApisauceInstance): UserApiInterface => ({
  signIn: () => signIn(api),
});
