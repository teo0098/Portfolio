import { Dispatch, SetStateAction } from "react";

export default interface MenuInterface {
    setMenu ?: Dispatch<SetStateAction<boolean>>;
    mobile ?: boolean;
}