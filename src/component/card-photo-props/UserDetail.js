import React from "react";
import faker from "faker";

export const UserDetail = (props) => {
    return (
        <div className="card border-dark mb-3" style={{maxWidth: '25rem'}}>
            <div className="card-body text-dark">
                <img src={props.avatar} alt="avatar" class="rounded float-left mr-2"/>
                <h5 className="card-title">{props.nama}</h5>
                <p className="card=text">{props.alamat}</p>
                <p className="card=text">
                    <small class="text-muted">Bergabung: {props.tanggalGabung}</small>
                </p>
            </div>
        </div>
    )
}