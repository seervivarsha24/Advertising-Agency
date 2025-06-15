import React, { useState } from "react";
import Modal from "./Modal";

function ParentComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (answers) => {
    console.log("Form data submitted: ", answers);
    setShowModal(false); // Close modal after submission
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button
        onClick={handleOpenModal}
        className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Open Modal
      </button>

      {/* Conditionally render the modal */}
      {showModal && (
        <Modal
          title="User Information"
          onSubmit={handleSubmit}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default ParentComponent;
