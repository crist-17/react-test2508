// src/components/Model.jsx
import { createPortal } from "react-dom";

export default function Model({ open, onClose, children }) {
  if (!open) return null;

  // 최상단 출력: 어떤 z-index/레이아웃에도 안 가려지게 document.body로 포털 렌더
  return createPortal(
    <div
      className="model-backdrop"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2147483647, // 진짜 최상단
      }}
    >
      <div
        className="model"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(520px,92vw)",
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 20,
          position: "relative",
          boxShadow: "0 14px 40px rgba(0,0,0,.2)",
        }}
      >
        {/* ↓↓ 이 텍스트가 보이면 모델이 확실히 렌더 중 */}
        <div style={{fontWeight:700, marginBottom:8}}>🦆 Cyworld 😇</div>
        {children}
        <button
          className="btn-close"
          onClick={onClose}
          style={{
            position: "absolute",
            right: 12,
            bottom: 12,
            border: "1px solid #ccc",
            background: "#fff",
            borderRadius: 8,
            padding: "6px 10px",
            cursor: "pointer",
          }}
        >
          × 닫기
        </button>
      </div>
    </div>,
    document.body
  );
}
