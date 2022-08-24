import React, { useState } from "react";
import PersonalNoteItem from "./PersonalNoteItem";

const PersonalNoteList = ({ notes, onDelete, onArchived}) => {
    const active = notes.filter(note => note.archived === false);
    const archived = notes.filter(note => note.archived === true);
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
        <div className="row row-cols-md-12" style={{ marginBottom: '50px' }}>
            <div className="form-control">
                <h3 className="form-label">Cari Catatan</h3>
                <input className="form-control" id="find-notes" placeholder="Cari catatan disini..." style={{ marginBottom: '20px' }} onChange={(event) => {
                    setSearchTerm(event.target.value)
                }} />
            </div>
        </div>
        <span className="badge rounded-pill bg-warning text-dark" style={{ marginBottom: '20px', paddingRight: '20px', paddingLeft: '20px' }}>
            <h3><i className="fa-solid fa-folder"></i> Catatan Aktif</h3>
        </span>
        
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
                // eslint-disable-next-line array-callback-return
                active.length !== 0 ?active.filter((act) => {
                    if (searchTerm === "") {
                        return act;
                    }
                    if (act.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return act;
                    }
                })
                .map(act => 
                <PersonalNoteItem
                    key={act.id}
                    title={act.title}
                    note={act.body} 
                    date={act.createdAt}
                    archived={act.archived}
                    onDelete={onDelete}
                    onArchived={onArchived}
                    {...act} />) : <div className="col"><p>Tidak ada catatan di folder aktif</p></div>
            }
        </div>
        <span className="badge rounded-pill bg-warning text-dark" style={{ marginBottom: '20px', paddingRight: '20px', paddingLeft: '20px' }}>
            <h3><i className="fa-solid fa-folder"></i> Catatan Arsip</h3>
        </span>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
                // eslint-disable-next-line array-callback-return
                archived.length !== 0 ? archived.filter((arch) => {
                    if (searchTerm === "") {
                        return arch;
                    }
                    if (arch.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return arch;
                    }
                })
                .map(arch =>
                    <PersonalNoteItem 
                    key={arch.id}
                    title={arch.title}
                    note={arch.body} 
                    date={arch.createdAt}
                    archived={arch.archived}
                    onDelete={onDelete}
                    onArchived={onArchived} 
                    {...arch} />) : <div className="col"><p>Tidak ada catatan di folder arsip</p></div>
            }
        </div>       
        </>
    );
};

export default PersonalNoteList;