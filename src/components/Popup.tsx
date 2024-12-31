interface PopupProps {
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ children }) => {
  return (
    <div className="popup">
      <div className="popup-content">{children}</div>
    </div>
  );
};

export default Popup;
