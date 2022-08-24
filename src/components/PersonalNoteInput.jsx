import React, { Component } from "react";
import Swal from "sweetalert2";

class PersonalNoteInput extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title: '',
            note: '',
            charLimit: 50
        };

        // binding this context to event handler
        this.onTitleEventHandler = this.onTitleEventHandler.bind(this);
        this.onNoteEventHandler = this.onNoteEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            };
        });
    }

    onNoteEventHandler(event) {
        this.setState(() => {
            return {
                note: event.target.value
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        Swal.fire({icon: 'success', text: 'Note berhasil ditambah'});
    }

    render() {
        return (
            <section className="py-5 container" id="top" style={{ marginTop: '20px' }}>
                <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-bold">Buat Catatan</h1>
                    <p className="text-end">Sisa karakter: {this.state.charLimit - this.state.title.length}</p>
                    <form className="form-control" onSubmit={this.onSubmitEventHandler}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Judul Catatan</label>
                            <input type="text" className="form-control" id="title" placeholder="Masukan judul disini" required="required" value={this.state.title} onChange={this.onTitleEventHandler} maxLength={this.state.charLimit}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="notes" className="form-label">Deskripsi catatan</label>
                            <textarea className="form-control" id="notes" rows="3" placeholder="Tulis catatan kamu disini" required="required" value={this.state.note} onChange={this.onNoteEventHandler}></textarea>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-warning">Tambah Catatan</button>
                        </div>
                    </form>
                </div>
                </div>
            </section>
        );
    }
}

export default PersonalNoteInput;