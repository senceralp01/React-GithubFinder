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
        console.log(this.state.keyword);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="container my-3">
                    <div className="input-group">
                        <input type="text" onChange={this.onChange} className="form-control" />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-secondary">Search</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Search