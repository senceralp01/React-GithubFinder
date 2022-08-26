// Komponent çeşitleri bu şekilde idi
// 1) Class component: state, lifecycle (Stateful)
// 2) Stateless function component (Stateless)

// React 16.8 sürümünden itibaren: function component + Hook => Stateful component
// Aartık Class component kullanmak yerine bu alternatif kullanılabilir. Özellikle ES6'ya hakim olmayanlar kullanabilir.

import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import '../styles/main.scss'

// class App extends Component {
//   render() {
//     return (
//       <div>Class Component</div>
//     )
//   }
// }


// const App = (props) => {
//     return (
//       <div>Stateless Arrow Function Component</div>
//     )
// }


// function App(props) {
//     return (
//         <div>Stateless Function Component</div>
//     )
// }


// class App extends Component {
//     constructor(props){ // Constructor'a ekstra özellikler göndermek istediğimizde bunu yapıyoruz.
//         super(props); // Base'e super aracılığıyla props parametresini gönderdik. Ekstra özellik göndermediğimiz durumda props parametresi stateless componentde olduğu gibi parametre olarak içeriye almamıza gerek yok.
//         this.state = {
//             count: 0,
//             text: ''
//         }
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

const App = (props) => {
    const [count, setCount] = useState(props.count);
    const [text, setText] = useState(props.text);
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



