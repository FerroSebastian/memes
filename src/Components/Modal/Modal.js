import React from 'react';


export default class Modal extends React.Component {

    agregarUnito() {
        let memes = this.state.memes;
        memes.push({
            url: this.state.url,
            titulo: this.state.titulo
        })
        this.setState({ memes: memes });
    }
    handleChange(e){
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state)
    }

    render () {
        return (
            <div className="container">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Launch demo modal</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                            <div class="modal-body">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="titulo"  placeholder="titulo" value={this.state.titulo} onChange={(event) => this.handleChange(event)} />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="url" placeholder="url" value={this.state.url} onChange={(event) => this.handleChange(event)} />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={() => this.agregarUnito()}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}