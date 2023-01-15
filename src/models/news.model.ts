
export interface INews {
    id?: string;
    code?: string;
    name?: string;
    image?: string;
    category?: string;
    date?: string;
}

export const defaultValue: Readonly<INews> = {};