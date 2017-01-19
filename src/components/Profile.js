import React from 'react';

export const Profile = (props) => {

  return(
    <div className="col-md-4">
      <p>This is the Profile Component!</p>
      <div className="col-md-3 mdb-color darken-2">
        <p>First: {props.first_name}</p>
      </div>
    </div>
    );
}
