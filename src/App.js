import logo from './512x512bb.jpg';
import './App.css';
import QRCode from "react-qr-code";
import {useState} from "react";

function App() {
    const [value, setValue] = useState('https://github.com/ch1nya')
    const [prevValue, setPrevValue] = useState('')
    const changeHandler = (e)=>{
        setPrevValue(e.target.value)
    }
    const generateQrCode = (e)=>{
        setValue(prevValue)
    }

    return (
        <div className="App">
            <div className='vignette'>
                <div className="App-div">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Turn your link into QR-code
                    </p>
                    <input
                        className="App-link"
                        placeholder='Here'
                        type='text'
                        onChange={changeHandler}
                        value={prevValue}
                    >
                    </input>

                    <div>
                        <button className='buttonSubmit'
                                type='submit'
                                onClick={generateQrCode}>Generate
                        </button>
                    </div>
                </div>
                <div className='output'>
                    {value && prevValue ? <QRCode className='qrCode' value={value}/> : ''}
                </div>

            </div>
        </div>
    );
}

export default App;
