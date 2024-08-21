import {useMutation} from "react-query";
import {registerRequest} from "./request.ts";
import {RegisterRequest, RegisterResponse} from "./dto.ts";

/**
 * Кастомный хук для регистрации
 */
export const useRegister = () => {
    return useMutation<RegisterResponse, Error, RegisterRequest>(registerRequest);
};
