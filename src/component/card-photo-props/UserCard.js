import React from "react";

export const UserCard = (props) => {
    return (
        <div className="card" style={{width:'30rem'}}>
            <div className="card-body">
                <h5 className="card-title">UserCard</h5>
                {props.children}
                <a href="#" className="card-link">Liat lebih...</a>
            </div>
        </div>
    )
}