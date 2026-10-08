import React from "react";

type pdfProps = {
  currentPdfUrl: string;
  currentPdfTitle: string;
  setIsPdfModalOpen: (i: boolean) => void;
};

export default function PdfModal({
  currentPdfUrl,
  currentPdfTitle,
  setIsPdfModalOpen,
}: pdfProps) {
  const fullPdfUrl =
    typeof window !== "undefined" && currentPdfUrl.startsWith("/")
      ? `${window.location.origin}${currentPdfUrl}`
      : currentPdfUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
        {/* شريط العنوان */}
        <div className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white">
          <h3 className="text-base font-semibold">{currentPdfTitle}</h3>
          <div className="flex items-center gap-3">
            <a
              href={fullPdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white transition hover:bg-blue-700"
            >
              Download
            </a>
            <button
              onClick={() => setIsPdfModalOpen(false)}
              className="rounded-lg bg-gray-800 px-3 py-1 text-lg font-bold text-gray-300 transition hover:bg-gray-700 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>

        {/* محتوى الـ Modal */}
        <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-gray-100 p-6 text-center">
          <iframe
            src={fullPdfUrl}
            className="h-full w-full border-none"
            title={currentPdfTitle}
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="text-gray-600">
                Your browser does not support inline PDF viewing.
              </p>
              <a
                href={fullPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white"
              >
                Open PDF in New Tab ↗
              </a>
            </div>
          </iframe>
        </div>
      </div>
    </div>
  );
}
