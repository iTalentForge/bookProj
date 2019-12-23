import React from "react";

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            search: "Level Up"
        };
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    render() {
        let filteredContacts = this.props.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(
                    this.state.search.toLowerCase) !== -1;
            }
        );
        return (
            <div>
                <ul>
                    {filteredContacts.map((contact) => {
                        return <Contact contact={contact}
                        key={contact.id} />
                    })}
                </ul>
                <input type="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} />
            </div>
        );
    }
}