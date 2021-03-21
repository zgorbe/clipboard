import { clipboardRef } from './firebase';
import React from 'react';

const LIMIT = 50;

const Clipboard = () => {
  const [clipboard, setClipboard] = React.useState([]);

  React.useEffect(() => {
    const clipboardDB = clipboardRef.limitToLast(LIMIT);
    clipboardDB.once('value', snapshot => {
      const data = [];
      snapshot.forEach((childSnapshot) => {
        data.unshift(childSnapshot.val());
      });
      setClipboard(data);
    });
  });

  return (
    <div className="row">
      <div className="col">
        {clipboard.map(data => (
          <div key={data.timestamp} className="card mb-4 p-3 bg-light shadow-sm">
            <span className="text-secondary">{new Date(data.timestamp).toLocaleString()}</span>
            <span>{data.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clipboard;
