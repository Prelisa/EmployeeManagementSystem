import React from 'react';
import { withRouter } from 'react-router-dom';
import './documentcard.scss';
import Error from 'components/Error';
import Button from 'components/Button';

import { Document, Page } from 'react-pdf';
class DocumentCard extends React.Component {
    renderTable = () => {
        return this.props.datas.map(data => {
            return (
                <div class="document-row ">
                    <div className="document-header">
                        <h4 class="card-title">{data.title}</h4>
                    </div>
                    <div className="document-body">
                        <p class="card-text">{data.description}</p>
                    </div>
                    <div className="document-footer">
                        <p class="card-text">{data.filename}</p>
                        <p class="card-text">{data.author}</p>
                    </div>
                </div>
            );
        });
    };

    handleClick(e, data) {
        this.props.history.push(`/admin/viewuser/${data._id}`, data);
    }

    render() {
        return (
            <div className="view-wrapper">
                <div className="view-container">
                    <div className="notification">
                        <h1>Document List</h1>

                        {this.props.notification && (
                            <div className="success-message">
                                <Error
                                    className={'success'}
                                    errorMessage={'New Document Added'}
                                />
                            </div>
                        )}
                    </div>
                    <div className="list-document ">{this.renderTable()}</div>
                </div>
            </div>
        );
    }
}
class MyApp extends React.Component {
    state = {
        numPages: null,
        pageNumber: 1
    };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Document
                    file="myFile-1565066062446.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>
        );
    }
}
export default withRouter(DocumentCard);
