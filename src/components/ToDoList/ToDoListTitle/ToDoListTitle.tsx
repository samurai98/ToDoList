import React, {ChangeEvent} from 'react';
import DeleteItemForm from '../../common/DeleteItemForm/DeleteItemForm';
import styles from './ToDoListTitle.module.css';

type OwnPropsType = {
    title: string
    idList: string
    delete: () => void
    updateTodolist: (newListTitle: string) => void
}

type StateType = {
    isEditMode: boolean
    title: string
}

class ToDoListHeader extends React.Component<OwnPropsType, StateType> {
    state = {
        isEditMode: false,
        title: this.props.title
    };

    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
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
        return <div className={styles['todoList-header']}>
            <div className={styles['todoList-header__title']}>
                {this.state.isEditMode
                    ? <input onBlur={this.deActivateEditMode}
                             onChange={this.onTitleChanged}
                             autoFocus={true}
                             value={this.state.title}/>
                    : <h3 className={styles['todoList-header__title']}
                          onClick={this.activateEditMode}
                          title={`id this list: ${this.props.idList}`}
                    >{this.props.title}</h3>
                }
            </div>
            <div>
                <DeleteItemForm id={this.props.idList}
                                delete={this.props.delete}/>
            </div>
        </div>;
    }
}

export default ToDoListHeader;

