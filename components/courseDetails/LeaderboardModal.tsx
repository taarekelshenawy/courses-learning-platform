type ModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LeaderboardModal({ open, setOpen }: ModalProps) {
  const leaders = [
    { rank: 1, name: "Ahmed Mahmoud", points: 1250, badge: "🥇" },
    { rank: 2, name: "Sara Khaled", points: 1100, badge: "🥈" },
    { rank: 3, name: "Mohamed Ali", points: 950, badge: "🥉" },
    { rank: 4, name: "Mahmoud Hassan", points: 820, badge: "4" },
    { rank: 5, name: "Fatma Omar", points: 750, badge: "5" },
  ];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900">
        <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3 dark:border-gray-800">
          <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
            Leaderboard
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
                {user.points} point
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
