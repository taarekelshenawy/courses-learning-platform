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
              تحميل الملف
            </a>
            <button
              onClick={() => setIsPdfModalOpen(false)}
              className="rounded-lg bg-gray-800 px-3 py-1 text-lg font-bold text-gray-300 transition hover:bg-gray-700 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="w-full flex-1 bg-gray-100">
          <object
            data={currentPdfUrl}
            type="application/pdf"
            className="h-full w-full border-none"
          >
            <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
              <p className="text-sm text-gray-600">
                عذراً، متصفحك لا يدعم العرض المباشر لهذا الملف.
              </p>
              <a
                href={currentPdfUrl}
                download
                className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
              >
                تحميل الملف على جهازك
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
}
