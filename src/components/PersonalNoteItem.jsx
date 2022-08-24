import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

const PersonalNoteItem = ({ title, note, date, archived, id, onDelete, onArchived }) => {
    return (
        <div className="col">
            <div className="card text-white bg-dark mb-3">
                <NoteItemBody title={title} note={note} date={date} archived={archived} />
                <div className="card-footer">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <DeleteButton id={id} onDelete={onDelete} />
                            <ArchiveButton id={id} onArchived={onArchived} archived={archived} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalNoteItem;