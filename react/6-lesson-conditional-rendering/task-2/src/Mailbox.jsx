import React from 'react';

const Mailbox = ({ UnreadMessages }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>
      {UnreadMessages.length > 0 && (
        <span className="mailbox__count">{UnreadMessages.length}</span>
      )}
    </div>
  );
};

export default Mailbox;
