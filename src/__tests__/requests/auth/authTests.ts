import '@testing-library/jest-dom'
import {registerRequest} from "../../../api/auth/request";


test('Регистрация нового пользователя', async () => {
    const registerData = {
        email: 'test@vavava.com',
        password: 'PQOipofijpowi',
        name: 'suusumi'
    };
    const res = await registerRequest(registerData);

    expect(res);
})