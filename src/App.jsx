import Clipboard from './Clipboard';
import React from 'react';
import AddForm from './AddForm';

const App = () => {
  const [showAddForm, setShowAddForm] = React.useState(false);

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className="my-4">Clipboard</h1>
        </div>
      </div>

      <div className="row">
        <div className="col">
          {showAddForm ? (
            <AddForm setShowAddForm={setShowAddForm} />
          ) : (
            <div className="mb-4 text-right">
              <button
                type="button"
                className="btn btn-sm btn-info px-3"
                onClick={handleAddClick}
              >
                Add
              </button>
            </div>
          )}
        </div>
      </div>

      <Clipboard />
    </div>
  );
}

export default App;
