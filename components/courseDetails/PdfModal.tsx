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

  const fullPdfUrl = typeof window !== "undefined" ? `${window.location.origin}${currentPdfUrl}` : currentPdfUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white">
          <h3 className="text-base font-semibold">{currentPdfTitle}</h3>
          <div className="flex items-center gap-3">
            <a
              href={currentPdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-blue-600 px-3 py-1 text-xs font-medium text-white transition hover:bg-blue-700"
            >
              Download File
            </a>
            <button
              onClick={() => setIsPdfModalOpen(false)}
              className="rounded-lg bg-gray-800 px-3 py-1 text-lg font-bold text-gray-300 transition hover:bg-gray-700 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
        
    
        <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-gray-100 p-6 text-center">
          <p className="text-lg font-medium text-gray-700">
            This PDF file is stored locally and can be viewed directly or downloaded.
          </p>
          <div className="flex gap-4">
            <a
              href={currentPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-blue-600 px-6 py-2.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Open PDF in New Tab ↗
            </a>
            <a
              href={currentPdfUrl}
              download
              className="rounded-lg bg-gray-800 px-6 py-2.5 font-semibold text-white transition hover:bg-gray-700"
            >
              Download PDF 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}



