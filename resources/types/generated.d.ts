declare namespace App.Data {
    export type UserData = {
        created_at?: string;
        updated_at?: string;
        id?: number;
        name: string;
        email: string;
        role: App.Enums.UserRole;
        email_verified_at?: string;
        password?: string;
    };
}
declare namespace App.Enums {
    export type UserRole = 'admin' | 'user';
}
