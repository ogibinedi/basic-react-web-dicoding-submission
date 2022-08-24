import React from "react";

const ArchiveButton = ({ id, archived, onArchived }) => {
    return (
        <button className="btn btn-sm btn-outline-warning" onClick={() => onArchived(id)} >{archived ? <i className="fas fa-rotate-left"></i> : <i className="fas fa-box-archive"></i>}</button>
    );
};

export default ArchiveButton;