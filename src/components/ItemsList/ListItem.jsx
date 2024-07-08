import React from 'react';

import styles from './ListItem.module.css';

const ListItem = ({itemData}) => {
    return (
        <div className={styles.itemContainer}>
            {itemData}
        </div>
    );
};

export default ListItem;