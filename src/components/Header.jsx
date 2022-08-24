import React from "react";

const Header = () => {
    return (
        <header>
            <div className="collapse bg-dark" id="navbarHeader">
                <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                    <h4 className="text-white">Tentang</h4>
                    <p className="text-muted">Personal Notes adalah aplikasi sederhana untuk mencatat rutinitas sehari-hari seperti todo. Aplikasi ini dibuat sebagai syarat kelulusan untuk mendapatkan sertifikasi</p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                    <h4 className="text-white">Hubungi Kami</h4>
                    <ul className="list-unstyled">
                        <li><a href="/" className="text-white">Follow on Twitter</a></li>
                        <li><a href="/" className="text-white">Like on Facebook</a></li>
                        <li><a href="/" className="text-white">Email me</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="navbar navbar-dark fixed-top bg-dark shadow-sm">
                <div className="container">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <i className="fa-solid fa-book"></i> &nbsp;&nbsp;
                    <strong>Personal Notes</strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
            </div>
        </header>
    );
};

export default Header;