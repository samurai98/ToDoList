import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './AddNewItemForm.module.css';

type OwnPropsType = {
    addItem: (newTitle: string) => void
}

type StateType = {
    error: boolean
    title: string
}

class AddNewItemForm extends React.Component<OwnPropsType, StateType> {

    state: StateType = {
        error: false,
        title: ''
    };

    onAddItemClick = () => {
        let newTitle = this.state.title.trim();
        if (newTitle === '') {
            this.setState({error: true});
        } else {
            this.setState({
                title: '',
                error: false
            });
            this.props.addItem(newTitle);
        }
    };
    onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            error: false,
            title: e.currentTarget.value
        })
    };
    onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.onAddItemClick();
        }
    };

    render = () => {
        let errorClass = this.state.error ? `${styles.error}` : '';
        return (
            <div className={styles['todoList-newTaskForm']}>
                <input
                    type='text'
                    placeholder='New item name'
                    className={errorClass}
                    onChange={this.onTitleChanged}
                    onKeyPress={this.onKeyPress}
                    value={this.state.title}
                />
                <button onClick={this.onAddItemClick}>Add</button>
            </div>
        );
    }
}


export default AddNewItemForm;

