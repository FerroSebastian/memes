import React from 'react';


export default class Modal extends React.Component {

    constructor() {
        super();
        this.state = {
            urls: []
        };
    }

    add() {
        var url = this.refs.url.value;
        if(localStorage.getItem('urls') == null) {
            var urls = [];
            urls.push(url);
            localStorage.setItem('urls', JSON.stringify(urls));
        } else {
            var urls = JSON.parse(localStorage.getItem('urls'));
            urls.push(url);
            localStorage.setItem('urls', JSON.stringify(urls));
        }
        this.setState({
            urls: JSON.parse(localStorage.getItem('urls'))
        });
        
    }

    render () {
        return(
            <div className="container">
                <br/>
                <button type="button" className="btn btn-dark col" data-toggle="modal" data-target="#exampleModal">Add Meme</button>
                <br/>
               
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Meme</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="form-row">
                            <div className="col">
                                {/* <input type="text" className="rounded" placeholder="Title..." ref="title" /> */}
                            </div>
                            <div className="col">
                                <input type="text" placeholder="url..." ref="url" />
                            </div>
                        </div>
                    </form>
                            
                            
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" value="Add"onClick={this.add.bind(this)}>Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}