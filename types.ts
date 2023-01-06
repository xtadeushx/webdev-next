type addressType = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
};

export type contactType = {
    name: string;
    email: string;
    address: addressType;
};
export type postType = {
    title: string;
    body: string;
    id: number;
};

export type socialsType = {
    id: number;
    icon: string;
    path: string;
};
