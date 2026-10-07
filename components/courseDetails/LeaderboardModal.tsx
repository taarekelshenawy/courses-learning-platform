type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LeaderboardModal({ open, setOpen }: ModalProps) {
  const leaders = [
    { rank: 1, name: "أحمد محمود", points: 1250, badge: "🥇" },
    { rank: 2, name: "سارة خالد", points: 1100, badge: "🥈" },
    { rank: 3, name: "محمد علي", points: 950, badge: "🥉" },
    { rank: 4, name: "محمود حسن", points: 820, badge: "4" },
    { rank: 5, name: "فاطمة عمر", points: 750, badge: "5" },
  ];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900">
        {/* العنوان */}
        <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3 dark:border-gray-800">
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
            🏆 لوحة المتصدرين
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer text-lg text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <div className="max-h-72 space-y-3 overflow-y-auto pr-1">
          {leaders.map((user) => (
            <div
              key={user.rank}
              className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 text-center text-lg font-bold">
                  {user.badge}
                </span>
                <span className="font-semibold text-gray-800 dark:text-white">
                  {user.name}
                </span>
              </div>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                {user.points} نقطة
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-gray-100 pt-3 text-center text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
          استمر في التفاعل وحل الدروس لتصعد إلى المراكز الأولى! 🚀
        </div>
      </div>
    </div>
  );
}
