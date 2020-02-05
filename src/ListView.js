import React from 'react';

function ListView(listOfNotes) {
    return(
        <div>
            <input type='text' placeholder="Search"></input>
            <ul>
                {listOfNotes.map((item, i) => {
                    <li key={i}>{item}</li>
                } )}
            </ul>
        </div>
    );
}

export default ListView;