import {Box, Button, TextField} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {useRegister} from "../../api/auth/UseRegister.tsx";


interface RegisterData {
    email: string;
    password: string;
    name: string;
}

export const RegistrationForm: React.FC = () => {
    const {handleSubmit, control, formState: {errors}} = useForm<RegisterData>();
    const {mutate, isLoading, error, data} = useRegister();

    const onSubmit = (registerData: RegisterData) => {
        mutate(registerData);
    };

    return (
        <Box sx={{marginTop:'200px'}}>
            <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{
                    required: "Имя обязательно"
                }}
                render={({field}) => (
                    <TextField
                        {...field} // Применение всех свойств, необходимых для интеграции с `react-hook-form`
                        label="Имя"
                        variant="outlined"
                        error={!!errors.name}
                        helperText={errors.name ? errors.name.message : ''}
                        margin="normal"
                    />
                )}
            />
            <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                    required: "Email обязателен",
                    pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Введите действительный email"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Email"
                        variant="outlined"
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ''}
                        margin="normal"
                    />
                )}
            />

            <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                    required: "Пароль обязателен",
                    minLength: {
                        value: 6,
                        message: "Пароль должен быть не менее 6 символов"
                    }
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        type="password"
                        label="Пароль"
                        variant="outlined"
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : ''}
                        margin="normal"
                    />
                )}
            />
            <Button onClick={handleSubmit(onSubmit)} disabled={isLoading}
                    variant="contained">Зарегистрироваться</Button>
            {error && <p>Ошибка: {error.message}</p>}
            {data && <p>Регистрация успешна!</p>}
        </Box>
    );
};
