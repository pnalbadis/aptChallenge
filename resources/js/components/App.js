import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form/Form';

const App = () => {
        return <Form />;
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
