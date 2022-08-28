import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this); // Kaybetmiş olduğu this parametresini onChange metoduna geri kazandırıyoruz.
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            keyword: ''
        }
    }

    onChange(event) {
        this.setState({
            keyword: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();

        if(this.state.keyword === ''){
            this.props.setAlert('Please type a keyword.', 'danger');
        }else {
            this.props.searchUsers(this.state.keyword);
            this.setState({ keyword: '' })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input type="text" value={this.state.keyword} onChange={this.onChange} className="form-control" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-warning">Search</button>
                        </div>
                    </div>
                </form>
                { 
                    this.props.showClearButton && <button onClick={this.props.clearResults} className="btn btn-secondary btn-sm btn-block mt-2">Clear Results</button>
                }
            </div> // Yukarıdaki expression'da && operatöründen önceki taraf true ise sağ taraf çalışır. False ise sol taraf çalışmaz.
        )
    }
}

export default Search