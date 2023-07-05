import { atom } from "recoil";

const items: itemProps[] = [];

export const itemState = atom({
    key: 'ITEMSTATE',
    default: items
})