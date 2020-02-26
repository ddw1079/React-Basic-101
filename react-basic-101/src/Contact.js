import React from "react";
import ContactInfo from "./ContactInfo";
import ContactDetail from "./ContactDetail";

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData: [{
                name: 'Albert',
                phone: '010-1111-1111',
            }, {
                name: 'Berta',
                phone: '010-2222-2222',
            }, {
                name: 'Casey',
                phone: '010-3333-3333',
            }, {
                name: 'Dmitri',
                phone: '010-4444-4444',
            }, {
                name: 'Emily',
                phone: '010-5555-5555',
            }]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    handleClick(key) {
        this.setState({
            selectedKey: key,
        });

        console.log(key, 'is selected')
    }

    render() {
        const mapToComponent = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
                }
            );
            return data.map((contact, i) => {
                return(<ContactInfo
                    contact={contact}
                    key={i}
                    onClick={() => this.handleClick(i)}
                />)
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponent(this.state.contactData)}</div>
                <ContactDetail isSelected={this.state.selectedKey != -1}/>
            </div>
        );
    }
}