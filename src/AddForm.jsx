import { clipboardRef } from './firebase';
import React from 'react';

const AddForm = ({ setShowAddForm }) => {
  const [text, setText] = React.useState('');

  const handleCancelClick = () => {
    setShowAddForm(false);
  };

  const handlePasteClick = () => {
    navigator.clipboard.readText().then(text => setText(text));
  };

  const handleSaveClick = () => {
    if (text) {
      clipboardRef.push({
        content: text,
        timestamp: new Date().getTime()
      });
      setShowAddForm(false);
    }
  };

  const onTextChange = event => setText(event.target.value);

  return (
    <form className="row align-items-center mb-4">
      <div className="col-md">
        <textarea className="w-100" value={text} onChange={onTextChange} autoFocus></textarea>
      </div>
      <div className="col-md-auto text-right mt-3 mt-md-0">
        <button
          type="button"
          className="btn btn-sm btn-info px-3 mr-4"
          onClick={handlePasteClick}
        >
          Paste
        </button>
        <button
          type="button"
          className="btn btn-sm btn-info px-3 mr-4"
          onClick={handleSaveClick}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-sm btn-light px-3"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddForm;
