import React from "react";

const DeleteButton = ({ id, onDelete}) => {
    return (
        <button className='btn btn-sm btn-outline-danger' onClick={() => onDelete(id)}><i className="fas fa-trash"></i></button>
    );
};

export default DeleteButton;