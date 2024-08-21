import {RegisterRequest, RegisterResponse} from "./dto.ts";
import {HttpClient} from "../../axios/HttpClient.ts";
import {AxiosResponse} from "axios";


/**
 * <h2>
 *     Данные пользователя для регистрации
 * </h2>
 * Почта, пароль, имя
 */
// interface RegisterData {
//     email: string;
//     password: string;
//     name: string;
// }

/**
 * <h2>
 *     Регистрация нового пользователя
 * @param registerRequest - email, password, name
 */
export const registerRequest = async (registerRequest: RegisterRequest): Promise<RegisterResponse> => {
    const response: AxiosResponse<RegisterResponse> = await HttpClient.post('/v1/auth/register', registerRequest);
    return response.data;
}
