import React from 'react';
import ReactDOM from 'react-dom';

function Rename() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">My Name is Suraj</div>

                        <div className="card-body">I'm Suraj!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rename;

if (document.getElementById('rename')) {
    ReactDOM.render(<Rename />, document.getElementById('rename'));
}
