export interface BookModel {
    name: string;
    description: string;
    price: number;
    category: BookCategory;
    createDate: number;
    isAvailable: boolean;
}

export enum BookCategory {
    Detective = 'Detective',
    Novel = 'Novel',
    Fantasy = 'Fantasy',
    None = 'None',
}
