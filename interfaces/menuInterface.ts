import { Dispatch, SetStateAction } from "react";

export default interface MenuInterface {
    menu ?: boolean;
    setMenu ?: Dispatch<SetStateAction<boolean>>;
    mobile ?: boolean;
}