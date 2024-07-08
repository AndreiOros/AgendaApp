import React from 'react';

import styles from './AgendaView.module.css';

import ItemsList from '../components/ItemsList/ItemsList.jsx';

const AgendaView = () => {
    return (
        <div className={styles.container}>
            <div className={styles.itemsList}>
                <ItemsList />
            </div>
            <div className={styles.itemDetails}>
                <div>test2</div>
                <div>test3</div>
            </div>
        </div>
    );
};

export default AgendaView;