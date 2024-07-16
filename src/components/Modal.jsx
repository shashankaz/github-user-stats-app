import React from "react";

const Modal = ({ title, items, onClose, onSelect }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <div className="modal-body">
          {items.length === 0 ? (
            <p>No items to display</p>
          ) : (
            <ul className="modal-list">
              {items.map((item) => (
                <li
                  key={item.id}
                  onClick={() => onSelect(item)}
                  className="modal-list-item"
                >
                  {item.login || item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
