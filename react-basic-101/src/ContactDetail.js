import React from "react";
export default class ContactDetail extends React.Component {
    render() {
        const details = (<div>Selected</div>);
        const blank = (<div>Not Selected</div>);
        return (
            <div>
                <h1>Contact Detail</h1>
                {this.props.isSelected ? details : blank}
            </div>
        );
    }
}