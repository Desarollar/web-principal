const Popup = ({ message, onClose, buttonName = "OK" }) => (
  <div
    className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
    onClick={onClose}
  >
    <div
      className="bg-white mx-auto rounded-lg p-6 mt-20 max-w-5xl max-h-[85vh] overflow-y-auto pb-8"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="text-xl text-justify whitespace-pre-wrap">{message}</p>
      <button
        onClick={onClose}
        className="mt-4 bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded"
      >
        {buttonName}
      </button>
    </div>
  </div>
);

export default Popup;
