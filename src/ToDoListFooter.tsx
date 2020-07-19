import React from 'react';
import './App.css';

type StateType = {
    isHidden: boolean
}

type OwnPropsType = {
    filterValue: string
    changeFilter: (newFilterValue: string) => void
}

class ToDoListFooter extends React.Component<OwnPropsType, StateType> {
    state = {
        isHidden: false
    };

    onAllFilterClick = () => {
        this.props.changeFilter('All')
    };
    onCompletedFilterClick = () => {
        this.props.changeFilter('Completed')
    };
    onActiveFilterClick = () => {
        this.props.changeFilter('Active')
    };
    onShowFiltersClick = () => {
        this.setState({isHidden: true})
    };
    onHideFiltersClick = () => {
        this.setState({isHidden: false})
    };

    render = () => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">
                {!this.state.isHidden && <div>
                    <button
                        className={classForAll}
                        onClick={this.onAllFilterClick}
                    >All
                    </button>
                    <button
                        className={classForCompleted}
                        onClick={this.onCompletedFilterClick}
                    >Completed
                    </button>
                    <button
                        className={classForActive}
                        onClick={this.onActiveFilterClick}
                    >Active
                    </button>
                </div>}
                {!this.state.isHidden && <span onClick={this.onShowFiltersClick}>hide</span>}
                {this.state.isHidden && <span onClick={this.onHideFiltersClick}>show</span>}
            </div>
        );
    }
}

export default ToDoListFooter;

