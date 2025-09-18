import { Eye, Calendar, TrendingUp, Users, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ViewsCountType = {
  count: number;
  viewdAt: Record<"createdAt", string>[];
  isVisible: boolean;
  onClose: () => void;
};

const ViewsCount = ({ count, viewdAt, isVisible, onClose }: ViewsCountType) => {
  // Calculate views in the last 7 days
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
  const recentViews = viewdAt.filter(view => {
    const viewDate = new Date(view.createdAt);
    return viewDate >= sevenDaysAgo;
  }).length;

  // Calculate views trend (percentage change)
  const previousWeekViews = viewdAt.filter(view => {
    const viewDate = new Date(view.createdAt);
    const twoWeeksAgo = new Date();
    twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    return viewDate >= twoWeeksAgo && viewDate < sevenDaysAgo;
  }).length;

  const trendPercentage = previousWeekViews > 0 
    ? Math.round(((recentViews - previousWeekViews) / previousWeekViews) * 100) 
    : recentViews > 0 ? 100 : 0;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-md mx-auto overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Eye size={20} />
                Profile Analytics
              </h2>
              <button
                onClick={onClose}
                className="ml-auto bg-white/20 hover:bg-white/30 p-1.5 rounded-full transition-colors text-white cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-3xl font-bold text-orange-600">{count.toLocaleString()}</div>
                  <p className="text-gray-500 dark:text-gray-400">Total views</p>
                </div>
                
                <div className="text-right">
                  <div className={`flex items-center gap-1 justify-end ${trendPercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendingUp size={16} className={trendPercentage < 0 ? 'rotate-180' : ''} />
                    <span className="font-medium">{Math.abs(trendPercentage)}%</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">vs previous week</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">{recentViews}</div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Last 7 days</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-amber-600">
                    {viewdAt.length > 0 ? Math.round(count / viewdAt.length) : 0}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Avg. daily</p>
                </div>
              </div>

              {/* Views chart */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-3">
                  <Calendar size={16} />
                  <span className="font-medium">Last 7 days</span>
                </div>
                <div className="flex items-end justify-between h-12 gap-1">
                  {[...Array(7)].map((_, i) => {
                    const day = new Date();
                    day.setDate(day.getDate() - (6 - i));
                    const dayViews = viewdAt.filter(view => {
                      const viewDate = new Date(view.createdAt);
                      return viewDate.toDateString() === day.toDateString();
                    }).length;
                    
                    const maxViews = Math.max(1, ...[...Array(7)].map((_, j) => {
                      const d = new Date();
                      d.setDate(d.getDate() - (6 - j));
                      return viewdAt.filter(view => {
                        const viewDate = new Date(view.createdAt);
                        return viewDate.toDateString() === d.toDateString();
                      }).length;
                    }));
                    
                    const height = Math.max(10, (dayViews / maxViews) * 40);
                    
                    return (
                      <div key={i} className="flex flex-col items-center flex-1">
                        <div 
                          className="w-full rounded-t bg-gradient-to-t from-orange-500 to-amber-400"
                          style={{ height: `${height}px` }}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {day.toLocaleDateString('en-US', { weekday: 'short' }).charAt(0)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recent activity */}
              <div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-3">
                  <Users size={16} />
                  <span className="font-medium">Recent Activity</span>
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto scrollbar-hide">
                  {viewdAt.slice(-5).reverse().map((view, index) => (
                    <div key={index} className="flex items-center justify-between text-sm py-1 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-500 dark:text-gray-400">
                        {new Date(view.createdAt).toLocaleDateString()}
                      </span>
                      <span className="text-orange-500">
                        {new Date(view.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ViewsCount;