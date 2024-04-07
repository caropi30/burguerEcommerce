import { object, string } from 'yup';

export const registerSchema = () => {
    return yup.object().shape({
        name: yup.string().required('El nombre es requerido'),
        email: yup.string().email('El email es inválido').required('El email es requerido').email('El email es inválido'),
        phone: yup.string().required('El teléfono es requerido').min(10, 'El teléfono debe tener al menos 10 caracteres').max(9, 'El teléfono debe tener máximo 10 caracteres'),
        password: yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener al menos 6 caracteres').password,
    });
};

export const loginSchema = () => {
    return yup.object().shape({
        email: yup.string().email('El email es inválido').required('El email es requerido'),
        password: yup.string().required('La contraseña es requerida').min(6, 'La contraseña debe tener al menos 6 caracteres'),
    });
};