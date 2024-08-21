/**
 *  Отправляемые данные регистрации
 */
export type RegisterRequest = {
    email: string,
    password: string,
    name: string,
};

export type RegisterResponse = {
    email: string;
    accessToken: string;
}