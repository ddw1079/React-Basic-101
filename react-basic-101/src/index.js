import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// class ContactInfo extends React.Component {
//   render() {
//     return (
//       <div>{this.props.contact.name} {this.props.contact.phone}</div>
//     )
//   }
// }
//
// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contactData: [
//         { name: 'Abet', phone: '010-0000-0001' },
//         { name: 'Betty', phone: '010-0000-0002' },
//         { name: 'Charlie', phone: '010-0000-0003' },
//         { name: 'David', phone: '010-0000-0004' }
//       ]
//     }
//
//   }
//   render() {
//
//     const mapToComponent = (data) => {
//       return data.map((contact, i) => {
//         return (<ContactInfo contact={contact} key={i}/>);
//       });
//     };
//
//
//     return (
//       <div>
//         { mapToComponent(this.state.contactData) }
//       </div>
//     );
//   }
// }


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

