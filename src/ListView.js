import React from 'react';

function ListView({listOfNotes, storeText, updateText, currentText}) {
    return(
        <div>
            <input type='text' placeholder="Search"></input>
            <form onSubmit={storeText}>
                <input type='text' placeholder="Create New Note" onChange={updateText} value={currentText}></input>
            </form>
            <ul>
                {
                listOfNotes.map((item, i) => {
                    return(<li key={i}>{item}</li>);
                })
                }
            </ul>
        </div>
    );
}

export default ListView;