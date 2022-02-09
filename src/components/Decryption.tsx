import React, { useContext } from 'react';
import Context from '../components/Context';

const Decryption = () => {

    const value = useContext(Context)

    const decryptCharByChar = (char: string, keyChar: string) => {
        if (!char || !keyChar || char === ' ') {
            return char;
        }
        if (char === undefined || keyChar === undefined) {
            return;
        }
        let keyCharCopy = keyChar.charCodeAt(0);
        let charCopy = char.charCodeAt(0);
        let asciiNumber = 0;
        if (char.charCodeAt(0) <= 1103 && char.charCodeAt(0) >= 1072) {
            asciiNumber = ((Math.abs(charCopy - keyCharCopy)) % 32) + 1072;
        }
        return String.fromCharCode(asciiNumber);
    }

    const decryptText = (text: string, key: string) => {
        let result = '';
        let counter = 0;
        for (let i = 0; i < text.length; i++) {
            result += decryptCharByChar(text[i], key[(i - counter) % key.length]);
            if (text[i] === ' ') {
                counter++;
            }
        }
        return result;
    }

  return (
      <div>
          <span>Шифрование: {decryptText(value.text, value.key)}</span>
      </div>
  );
};

export default Decryption;
