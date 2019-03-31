import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyHello from './MyHello';
import MyType from './MyType';
import MyAttrMulti from './MyAttrMulti';
// multi
const data = {
    name: '山田権左衛門',
    age: 18,
    sex: '男',
};

ReactDOM.render(
    // default
    // <App />, 

    // props 基本
    // <MyHello name="山田" />,

    // props -2
    // propsの渡し方は下記のように色々
    // <div>
    //     {/*文字列*/}
    //     <MyType value="山田" />
    //     {/*文字列*/}
    //     <MyType value={'鈴木'} />
    //     {/*数値*/}
    //     <MyType value={108} />
    //     {/*真偽値*/}
    //     <MyType value={true} />
    //     {/*配列*/}
    //     <MyType value={['うめ', 'もも', 'さくら']} />
    //     {/*オブジェクト*/}
    //     <MyType value={{ name: "山田太郎", age: 40 }} />
    //     {/*関数*/}
    //     <MyType value={() => console.log('Hoge')} />
    // </div>,

    // multi
    <MyAttrMulti {...data} />,
    document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
