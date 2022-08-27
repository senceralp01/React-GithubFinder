
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import '../styles/main.scss'


const App = (props) => {
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState(props.text);

    useEffect(() => {
        console.log('componentDidMount');
        const countData = localStorage.getItem('count');
        const textData = localStorage.getItem('text');
        console.log(countData);

        if(countData){
            setCount(Number(countData));
        }

        if(textData){
            setText(textData)
        }

    }, [])

    useEffect(() => {
        console.log('componentDidMount-componentDidUpdate');
    });

    useEffect(() => {
        console.log('count-componentDidUpdate');
        localStorage.setItem('count', count);
    }, [count]);

    useEffect(() => {
        console.log('text-componentDidUpdate');
        localStorage.setItem('text', text);
    }, [text]);


    return (
        <div className="row justify-content-center">
            <div className="col-sm-6 col-md-4">
                <div className="card my-3 text-center border-success" style={{ height: '20rem' }}>
                    <div className="card-header font-weight-bolder">Counter</div>
                    <div className="card-body">
                        <div className="card-title">
                            <p>Butona <b>{count}</b> kez tıkladınız.</p>
                        </div>
                        <p><strong>Girilen text:</strong> <span className="text-danger"> {text}</span></p>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                    <div className="card-footer">
                        <button className='btn btn-success' onClick={() => setCount(count + 1)}>1 Artır</button>
                        <button className='btn btn-danger ml-2' onClick={() => setCount(count - 1)}>1 Azalt</button>
                        <button className='btn btn-warning ml-2' onClick={() => setCount(props.count)}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

App.defaultProps = {
    count: 5,
    text: 'Bir şeyler yaz.'
}

ReactDOM.render(<App count={0} />, document.getElementById('root'));