import React from 'react';
import ReactDOM from 'react-dom';

import Header from './common/header.jsx';
import Footer from './common/footer.jsx';
import Hotels from './hotels.jsx';

class App extends React.Component {
    render () {
        return (<div>
            <Header />
            <Hotels />
            <Footer />
        </div>);
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
