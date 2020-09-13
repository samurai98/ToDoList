import React from 'react';
import styles from './Preloader.module.css';

type OwnPropsType = {
    height: string
}

class Preloader extends React.Component<OwnPropsType> {
    render = () => {
        return (<div className={styles.wrapper} style={{height: this.props.height}}>
            <div className={styles.five}>
                <div className={styles.first}> </div>
                <div className={styles.first}> </div>
                <div className={styles.first}> </div>
                <div className={styles.first}> </div>
                <div className={styles.second}> </div>
                <div className={styles.like}> </div>
            </div>
        </div>);
    }
}

export default Preloader;