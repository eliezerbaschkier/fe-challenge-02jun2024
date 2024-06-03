export type User = {
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
};
export type Preferences = {
    receiveEmails: boolean;
    receiveNotifications?: boolean;
};

export type UserFormData = Omit<
    User,
    "createdAtDate" | "updatedAtDate" | "createdById" | "updatedById"
>;
