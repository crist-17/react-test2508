export default function Model({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="model-backdrop" onClick={onClose}>
      <div className="model" role="dialog" aria-model="true" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="btn-close" onClick={onClose}>× 닫기</button>
      </div>
    </div>
  );
}
