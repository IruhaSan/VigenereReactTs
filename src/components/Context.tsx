import { createContext } from "react";

type ContextType = {
    text: string;
    key: string;
}

const Сontext = createContext<ContextType>({text: '', key: ''});

export default Сontext;