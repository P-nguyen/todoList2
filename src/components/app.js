import 'bootstrap/dist/css/bootstrap.min.css'; // with out ./ it automatically looks at node_module
import React from 'react';
import List from './list';


const App = () => (
    <div>
        <div className="container">
            <div className="row">
                <h1 className="col text-center">ToDoList</h1>
            </div>
            <List/>
        </div>
    </div>
);

export default App;
