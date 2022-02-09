import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import classes from './Home.module.scss';
import Input from '../../ui/Input/Input';
import TextArea from '../../ui/Textarea/TextArea';
import Button from '../../ui/Button/Button';
import Context from '../../components/Context';
import Decryption from '../../components/Decryption';
import Encryption from '../../components/Encryption';

type IProps = {

}

type RequestType = {
    key: string;
    text: string;
    cypher: boolean;
}

const Home: FC<IProps> = (props) => {
    const [text, setText] = useState('');
    const [key, setKey] = useState('');
    const [data, setData] = useState<RequestType[]>([])
    const [isToggled, setToggle] = useState(true);
    const value = {
        text,
        key,   
    }

    
    
    useEffect(() => {
        let data: RequestType[] = [];
        let text: string = '';
        let key: string = '';
        try {
            let localStorageData = window.localStorage.getItem('request_history')
            let localStorageText = window.localStorage.getItem('request_textHistory')
            let localStorageKey = window.localStorage.getItem('request_keyHistory')
            if (localStorageData) data = JSON.parse(localStorageData);
            if (localStorageText) text = JSON.parse(localStorageText);
            if (localStorageKey)  key = JSON.parse(localStorageKey);
            
        } catch(e) {
            console.error(e);
        }
        setData(data);
        setText(text);
        setKey(key);
        
    }, []);
    
    useEffect(() => {
        window.localStorage.setItem('request_history', JSON.stringify(data));
        window.localStorage.setItem('request_textHistory', JSON.stringify(text));
        window.localStorage.setItem('request_keyHistory', JSON.stringify(key));
    }, [data, text, key]);
    
    const saveData = (textData: string, keyData: string, cypherState: boolean) => {
        if (textData !== '' && keyData !== '') {
            setData([...data, { text: textData, key: keyData, cypher: cypherState}])
        }
    }

    return (
            <Context.Provider value={value}>
        <div className={classes.root}>

            <div className={classes.content}>
                <div>
                    <TextArea className={classes.customTextArea} value={text} placeholder="Текст" onChange={(value) =>  setText(value)} />
                    <Button onClick={() => setToggle(!isToggled)}>
                        {
                            isToggled ?
                            <span>Дешифрование</span>
                            :
                            <span>Шифрование</span>
                        }
                    </Button>

                    <Button onClick={() => saveData(text, key, isToggled)}>Сохранить</Button>
                    <span>Символов: {text.length}</span>
                </div>
                <div>
                    <Input className={classes.customInput} value={key} placeholder='Ключ шифровки' onChange={(value) => setKey(value)} />
                </div>
                
                <div>
                    <span className={classes.customDiv}>Статистика: {(data.length !== 0) ? data.map((item, index) => (
                        <span key={index} onClick={() => { setText(item.text); setKey(item.key) }}>{item.cypher ? 'Шифровка' : 'Дешифровка'} Текст: {item.text} Ключ: {item.key} 
                        <Button onClick={() => setData(data.filter((item, itemIndex) => itemIndex !== index))}>Удалить нахуй</Button>
                        </span>
                    )) : <span> нетУ </span>
                } </span>
                     <Button onClick={() => setData([])}>Очистить</Button>
                </div>
            </div>
                <div className={classes.cypherResult}>
                    {
                        isToggled ? (

                            <Decryption />
                            )
                            : (     
                            <Encryption />
                            )
                        
                    }
                </div>
        </div>
                </Context.Provider>
    );
};

export default Home;