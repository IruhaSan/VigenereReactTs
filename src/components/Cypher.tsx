import React, { FC } from 'react';

type IProps  = {
    value?: string;
}


const Cypher: FC<IProps> = (props) => {
   
    const encryptCharByChar = (char: string, stepChar: string) => {
        let dataCopy = char;
        let asciiNumber = char.charCodeAt(0);
        console.log(char.charCodeAt(0), stepChar.charCodeAt(0));
        if (char.charCodeAt(0) <= 1103 && char.charCodeAt(0) >= 1040) {
            asciiNumber = char.charCodeAt(0) + stepChar.charCodeAt(0);
            asciiNumber = (asciiNumber % 64) + 1040;
        }
        console.log(asciiNumber);
        return String.fromCharCode(asciiNumber);
    }

    return (
        <span> </span>
    )
};

export default Cypher;