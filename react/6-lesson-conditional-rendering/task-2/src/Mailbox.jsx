import React from 'react';

const Mailbox = ({ UnreadMessanges }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>
      {UnreadMessanges.length > 0 && (
        <span className="mailbox__count">{UnreadMessages.length}</span>
      )}
    </div>
  );
};

export default Mailbox;
