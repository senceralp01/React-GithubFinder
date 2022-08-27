
import React, { useState, useEffect, Component } from 'react'
import ReactDOM from 'react-dom';
import '../styles/main.scss'

// class App extends Component {
//     constructor(props){ // Constructor'a ekstra özellikler göndermek istediğimizde bunu yapıyoruz.
//         super(props); // Base'e super aracılığıyla props parametresini gönderdik. Ekstra özellik göndermediğimiz durumda props parametresi stateless componentde olduğu gibi parametre olarak içeriye almamıza gerek yok.
//         this.state = {
//             count: 0,
//             text: ''
//         }
//     }

//     componentDidMount() { // Komponent oluşturulduğu anda bu method tetiklenir.
//         console.log('componentDidMount: Komponent oluşturuldu.');
//     }

//     componentDidUpdate() { // Komponentdeki state içerisindeki bir bilgi değiştiği anda bu method tetiklenir.
//         console.log('componentDidUpdate: Komponent güncellendi.');
//     }

//     render(){
//         return (
//                 <div className="container my-3">
//                     <div className="card">
//                         <p>Butona {this.state.count} kez tıkladınız.</p>
//                         <button className='btn btn-dark' onClick={() => this.setState({count: this.state.count+1})}>Artır</button>
//                     </div>
//                 </div>
//         )
//     }
// }

// ReactDOM.render(<App/>, document.getElementById('root'));


const App = (props) => {
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState(props.text);

    // useEffect:

    // İkinci parametre gönderilirse:
    // Bu durumda useEffect, class component'deki componentDidMount'a karşılık gelmektedir.
    // Komponent oluşturulduğu anda tetiklenir.
    useEffect(() => {
        console.log('useEffect, componentDidMount olarak çalıştı.')
    }, [])


    // İkinci parametre gönderilmezse:
    // Bu durumda useEffect, class component'deki componentDidMount ve componentDidUpdate'e karşılık gelmektedir.
    // Komponent oluşturulduğu anda ve komponent içerindeki bir bilgi değiştiği anda tetiklenir.
    useEffect(() => {
        console.log('useEffect, componentDidMount ve componentDidUpdate olarak çalıştı.');
    });

    // İkinci parametre içerinde bir bilgi gönderilirse:
    // Bu durumda komponent oluştuğunda ve içerisindeki ilgili bilgide bir değişiklik olduğu anda tetiklenir.
    useEffect(() => {
        console.log('useEffect, count bilgisi için componentDidUpdate olarak çalıştı.');
    }, [count]);


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