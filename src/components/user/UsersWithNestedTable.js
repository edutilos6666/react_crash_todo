import React, {Component} from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';

class UsersWithNestedTable extends Component {
    render() {
        const columns = [
            {
                Header: "Key", 
                columns: [
                    {
                        Header: "Key", 
                        accessor: "Key"
                    }
                ]
            }
        ];
        return (
            <React.Fragment>
                <h1>Users with ReactNestedTable</h1>
                <ReactTable data={this.props.users} columns={columns}/>
            </React.Fragment>
        );
    }
}

UsersWithNestedTable.propTypes = {
    users: PropTypes.array.isRequired
}

export default UsersWithNestedTable;