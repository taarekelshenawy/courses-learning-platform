type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LeaderboardModal({ open, setOpen }: ModalProps) {
  // بيانات المتصدرين (ترتيب، اسم، نقاط، والميدالية للمراكز الأولى)
  const leaders = [
    { rank: 1, name: "أحمد محمود", points: 1250, badge: "🥇" },
    { rank: 2, name: "سارة خالد", points: 1100, badge: "🥈" },
    { rank: 3, name: "محمد علي", points: 950, badge: "🥉" },
    { rank: 4, name: "محمود حسن", points: 820, badge: "4" },
    { rank: 5, name: "فاطمة عمر", points: 750, badge: "5" },
  ];

  // إذا كان الـ modal مغلقاً، لا تقم برسم أي شيئ في الـ DOM
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white dark:bg-gray-900 w-full max-w-md p-6 rounded-2xl shadow-2xl relative">
        {/* العنوان */}
        <div className="flex justify-between items-center mb-4 border-b border-gray-100 dark:border-gray-800 pb-3">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            🏆 لوحة المتصدرين
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-lg transition"
          >
            ✕
          </button>
        </div>

        {/* قائمة المتصدرين */}
        <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
          {leaders.map((user) => (
            <div
              key={user.rank}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 text-center font-bold text-lg">
                  {user.badge}
                </span>
                <span className="font-semibold text-gray-800 dark:text-white">
                  {user.name}
                </span>
              </div>
              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                {user.points} نقطة
              </span>
            </div>
          ))}
        </div>

        {/* تذييل المودل (ترتيب المستخدم الحالي مثلاً) */}
        <div className="mt-5 pt-3 border-t border-gray-100 dark:border-gray-800 text-center text-xs text-gray-500 dark:text-gray-400">
          استمر في التفاعل وحل الدروس لتصعد إلى المراكز الأولى! 🚀
        </div>
      </div>
    </div>
  );
}