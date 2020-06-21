import React from 'react';
import DeleteItemForm from "./DeleteItemForm";


class ToDoListHeader extends React.Component {
    state = {
        isEditMode: false,
        title: this.props.title
    };

    onTitleChanged = (e) => {
        this.setState({title: e.currentTarget.value});
    };

    activateEditMode = () => {
        this.setState({isEditMode: true});
    };

    deActivateEditMode = () => {
        this.setState({isEditMode: false});
        this.props.updateTodolist(this.state.title);
    };


    render = () => {
        return (<div>
            {this.state.isEditMode
                ? <input className='todoList-header__title'
                         onBlur={this.deActivateEditMode}
                         onChange={this.onTitleChanged}
                         autoFocus={true}
                         value={this.state.title}/>
                : <h3 className='todoList-header__title'
                      onClick={this.activateEditMode}
                      title={`id this list: ${this.props.idList}`}
                >{this.props.title}</h3>
            } <DeleteItemForm idList={this.props.idList} delete={this.props.delete}/>
        </div>);
    }
}

export default ToDoListHeader;

