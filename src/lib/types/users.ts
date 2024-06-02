export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: string;
    preferences: Preferences;
    createdById: string;
    createdAtDate: string;
    updatedById: string;
    updatedAtDate: string;
}
export interface Preferences {
    receiveEmails: boolean;
    receiveNotifications?: boolean;
}
