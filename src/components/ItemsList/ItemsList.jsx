import React, {useState} from 'react';

import ListItem from './ListItem';

import Modal from './Modal';

const ItemsList = () => {
    const items = ['item1', 'item2', 'item3', 'item4', 'item5'];
    const [visible, setVisible] = useState(false);
    return (
        <div>
            {
                items.map((item, index) => (
                    <ListItem key={index} itemData={item} />
                ))
            }
            <button onClick={() => setVisible(true)}>Open modal</button>
            <Modal visible={visible} setVisible={setVisible} />
        </div>

    );
};

export default ItemsList;