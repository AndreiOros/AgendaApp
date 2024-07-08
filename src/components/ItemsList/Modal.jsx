import React, { useRef } from "react";

import styles from "./Modal.module.css";

export default function Modal({ visible, setVisible }) {
  const modalRef = useRef(null);

  return (
    <>
      {visible ? (
        <div
          className={styles.modalContainer}
          onClick={(e) => {
            if (modalRef.current.contains(e.target)) {
              return;
            }
            setVisible(false);
          }}
        >
          <div ref={modalRef}>
            <h1>My modal</h1>
            <button onClick={() => setVisible(false)}> close</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}