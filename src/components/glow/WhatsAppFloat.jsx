// TODO: replace 27000000000 with the real WhatsApp number once provided.
const WHATSAPP_URL = "https://wa.me/27000000000";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Glow Health & Aesthetics on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full transition-all duration-300 focus-glow"
      style={{
        width: "58px",
        height: "58px",
        backgroundColor: "#6F5948",
        boxShadow: "0 10px 28px -8px rgba(61,46,34,0.55), 0 0 0 1px rgba(216,195,165,0.35) inset",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#5A4838";
        e.currentTarget.style.transform = "scale(1.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#6F5948";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#FBF4E8" aria-hidden="true">
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02ZM12.04 20.15h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 1 1 15.21-4.38c0 4.55-3.71 8.24-8.21 8.24Zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.4-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42l-.48-.01a.92.92 0 0 0-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.29Z" />
      </svg>
    </a>
  );
}
