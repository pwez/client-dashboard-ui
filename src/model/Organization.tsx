export interface Organization {
    id: number;
    created_at: Date;
    name: string;
    headcount: number;
    is_public: boolean;
    address_1: string;
    city: string;
    state: string;
    zip_code: string;
}
