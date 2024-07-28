export interface UserModel {
    name: string;
    email: string;
    phone: string;
    password: string;
    role?: string;
}

export interface resultSignUp {
    success: string, 
    data: object,
    message: string
}