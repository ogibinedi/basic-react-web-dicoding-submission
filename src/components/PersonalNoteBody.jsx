import React, {Component} from "react";
import PersonalNoteInput from "./PersonalNoteInput";
import { getInitialData } from '../utils/data';
import PersonalNoteList from "./PersonalNoteList";

class PersonalNoteBody extends Component {
   constructor(props) {
    super(props);
    this.state = {
        notes: getInitialData()
    };

    // binding the context to event handler
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
  }

  onDeleteEventHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchivedEventHandler(id) {
        const updateStatusNotes = [...this.state.notes];
        const noteIndex = updateStatusNotes.findIndex(note => note.id === id);
        if (updateStatusNotes[noteIndex].archived === true) {
            updateStatusNotes[noteIndex].archived = false;
        } else {
            updateStatusNotes[noteIndex].archived = true;
        }
        this.setState({notes: updateStatusNotes});

    }

    onAddNoteEventHandler({ title, note }) {
        this.setState((prevState) => {
            return {
                notes:[
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        note,
                        createdAt: new Date(),
                        archived: false
                    }
                ]
            };
        });
    }
    render() {
        return (
        <>
            <h2>Buat catatan</h2>
            <PersonalNoteInput addNote={this.onAddNoteEventHandler} />
            <PersonalNoteList 
            notes={this.state.notes} 
            onDelete={this.onDeleteEventHandler} 
            onArchived={this.onArchivedEventHandler} />
        </>
    );
    }
}

export default PersonalNoteBody;