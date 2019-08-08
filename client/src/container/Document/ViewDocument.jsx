import React, { Component } from 'react';
import request from 'request';
import DocumentCard from './DocumentCard';

class ViewDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            password: '',
            age: '',
            dob: '',
            address: '',
            contact: '',
            documents: [],
            val: props.match.params.value
        };
    }

    componentDidMount() {
        var myJSONObject = {
            _id: this.state.id,
            name: this.state.username,
            email: this.state.email,
            password: this.state.password,
            age: this.state.age,
            dob: this.state.dob,
            contact: this.state.contact,
            address: this.state.address
        };

        request(
            {
                url: 'http://localhost:4000/getdocuments',
                method: 'GET',
                json: true, // <--Very important!!!
                body: myJSONObject
            },
            function(error, response, body) {
                const datas = [];
                console.log(response);

                response.body.message.data.map(data => {
                    const obj = [
                        {
                            _id: data._id,
                            filename: data.filename,
                            title: data.title,
                            description: data.description,
                            department: data.department,
                            visibility: data.visibility
                        }
                    ];
                    Array.prototype.push.apply(datas, obj);
                });
                this.setState({
                    documents: datas
                });
            }.bind(this)
        );
    }

    render() {
        return (
        <DocumentCard
                datas={this.state.documents}
                notification={this.state.val}
            />
        );
    }
}

export default ViewDocument;
