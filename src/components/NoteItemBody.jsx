import React from "react";
import { showFormattedDate } from "../utils/data";

const NoteItemBody = ({ title, note, date}) => {
    return (
        <>
            <div className="card-header">
                <h3>{title}</h3>
                <small className="text-muted">{showFormattedDate(date)}</small>
            </div>
            <div className="card-body" bg="warning">
                <p className="card-text">{note}</p>
            </div>
        </>
    );
};

export default NoteItemBody;