import React, { useContext } from 'react';
import Context from '../components/Context';


const Encryption = () => {

    const value = useContext(Context);

    const encryptCharByChar = (char: string, keyChar: string): string => {
        if (!char || !keyChar || char === ' ') {
            return char;
        }
        let asciiNumber = 0;
        if (char.charCodeAt(0) <= 1103 && char.charCodeAt(0) >= 1072) {
            asciiNumber = char.charCodeAt(0) + keyChar.charCodeAt(0);
            asciiNumber = (asciiNumber % 32) + 1072;
        }
        return String.fromCharCode(asciiNumber);
    }


    const encryptText = (text: string, key: string) => {
        let result = '';
        let counter = 0;
        console.log('anal');
        for (let i = 0; i < text.length; i++) {
            result += encryptCharByChar(text[i], key[(i - counter) % key.length]);
            if (text[i] === ' ') {
                counter++;
            }
        }
        return result;
    }

  return (
      <div>
          <span>Дешифрование: {encryptText(value.text, value.key)}</span>
      </div>
  )
};

export default Encryption;
