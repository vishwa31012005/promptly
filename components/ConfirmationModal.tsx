import React from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onConfirm, onClose, title, message }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md p-6 space-y-4 transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        <h2 id="modal-title" className="text-xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {message}
        </p>
        <div className="flex justify-end space-x-4 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-offset-gray-800 transition duration-200"
            aria-label="Cancel action"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-gray-800 transition duration-200"
            aria-label="Confirm action"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;