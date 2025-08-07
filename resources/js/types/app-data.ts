export type UserData = {
    created_at?: string;
    updated_at?: string;
    id?: number;
    name: string;
    email: string;
    role: UserRole;
    email_verified_at?: string;
    password?: string;
};
export enum UserRole {
    Admin = 'admin',
    User = 'user',
}
