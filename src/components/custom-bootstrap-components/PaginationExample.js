import React, {Component} from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';

class PaginationExample extends Component {
    state = {
        active : 1
    }


    handlePrevPage = () => {
        let active = this.state.active - 1;
        if(active < 1) active = PAGE_SIZE;
        this.setState({active});
    }

    handleNextPage = () => {
        let active = this.state.active + 1;
        if(active >  PAGE_SIZE) active = 1;
        this.setState({active});
    }

    render() {
        const NEWLINE = (<><br/><br/></>);
        let items = [];
        let active = 1;
        for(let number =1 ; number <= PAGE_SIZE; ++number) {
            items.push(
                <Pagination.Item key={number} active={number === this.state.active}
                onClick={()=> this.setState({active: number})}
                >
                    {number}
                </Pagination.Item>
            );
        }
        return (
            <>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />
                
                <Pagination.Item>{10}</Pagination.Item>
                <PageItem>{11}</PageItem>
                <PageItem>{12}</PageItem>
                <PageItem active>{13}</PageItem>
                <PageItem>{14}</PageItem>
                <Pagination.Ellipsis />

                <PageItem disabled>{20}</PageItem>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
            {NEWLINE}
            <Pagination>
                <Pagination.First onClick = {()=> {this.setState({active: 1})}}/>
                <Pagination.Prev onClick = {this.handlePrevPage} />
                {items}
                <Pagination.Next onClick = {this.handleNextPage} />
                <Pagination.Last onClick = {()=> {this.setState({active: 5})}}/>
            </Pagination>
            </>
        );
    }
}


const PAGE_SIZE = 5;

export default PaginationExample;