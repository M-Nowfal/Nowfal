import axios, { AxiosError } from 'axios';
import { Send, X, Mail, Clock, User, Trash2, Reply } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

type MessageType = {
  _id: string,
  name: string,
  email: string,
  message: string,
  createdAt: string
};

export function MessageView({ messages, toggleShowMessages, setMessages }: {
  messages: MessageType[],
  toggleShowMessages: () => void,
  setMessages: (messages: MessageType[]) => void
}) {

  const [loading, setLoading] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [isReplying, setIsReplying] = useState("");
  const [replySent, setReplySent] = useState({ msgId: "", res: "", success: false });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setReplySent({ msgId: "", res: "", success: false });
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [replySent]);

  const handleMessageDelete = async (msgId: string) => {
    try {
      setLoading(msgId);
      await axios.delete(`${import.meta.env.VITE_API_URL}/messages`, {
        data: { id: msgId }, headers: { "Content-Type": "application/json" }
      });
      setMessages(messages.filter(message => message._id !== msgId));
    } catch (err: unknown) {
      const error = err instanceof AxiosError ? err.response?.data.error : err;
      console.log(error);
    } finally {
      setLoading("");
    }
  };

  const handleMessageSend = async (msg: MessageType) => {
    if (!replyMessage.trim()) {
      setReplySent({ msgId: msg._id, res: "Empty reply not allowed", success: false });
      return;
    };
    try {
      setLoading(msg._id);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/reply`, {
        email: msg.email, replyMsg: replyMessage, senderName: msg.name
      });
      if (response.status === 200) {
        setReplyMessage("");
        setIsReplying("");
        setReplySent({
          msgId: msg._id, res: response.data.message, success: true
        });
      }
    } catch (err: unknown) {
      const error = err instanceof AxiosError ? err.response?.data.message : String(err);
      setReplySent({ msgId: msg._id, res: error, success: false });
      console.error(error);
    } finally {
      setLoading("");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 will-change-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center">
            <div className="flex items-center gap-3">
              <Mail size={24} />
              <h2 className="text-2xl font-bold">Messages</h2>
            </div>
            <button
              className="ml-auto bg-white/20 hover:bg-white/30 p-1.5 rounded-full transition-colors text-white cursor-pointer"
              onClick={toggleShowMessages}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="overflow-y-auto flex-1 p-5 border scrollbar-hide">
            {messages.length === 0 ? (
              <div className="text-center py-10">
                <Mail size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500 dark:text-gray-400 text-xl">No messages available</p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message._id}
                    className="bg-white dark:bg-zinc-700/30 rounded-xl shadow-md p-5 border-l-4 border-orange-500"
                  >
                    {/* Message Header */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-orange-500" />
                        <h3 className="font-semibold text-gray-800 dark:text-white">{message.name}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Clock size={14} />
                        <span>{new Date(message.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <Mail size={14} className="text-orange-500" />
                      <a href={`mailto:${message.email}`} className="text-orange-600 dark:text-orange-400 hover:underline">
                        {message.email}
                      </a>
                    </div>

                    {/* Message Content */}
                    <div className="bg-gray-100 dark:bg-zinc-600/60 p-4 rounded-lg mb-4">
                      <p className="text-gray-700 dark:text-gray-200">{message.message}</p>
                    </div>

                    {/* Reply Section */}
                    {isReplying === message._id && (
                      <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                      >
                        <textarea
                          rows={3}
                          name="reply"
                          className="w-full p-3 border border-gray-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-zinc-600 dark:text-white"
                          value={replyMessage}
                          onChange={(e) => setReplyMessage(e.target.value)}
                          placeholder="Type your reply here..."
                        />
                        <div className="flex gap-2 mt-2">
                          <motion.button
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow disabled:opacity-70"
                            onClick={() => handleMessageSend(message)}
                            disabled={message._id === loading}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <Send size={16} />
                            {message._id === loading ? "Sending..." : "Send Reply"}
                          </motion.button>
                          <motion.button
                            className="px-4 py-2 bg-gray-200 dark:bg-zinc-600 text-gray-700 dark:text-gray-200 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-zinc-500 transition-colors"
                            onClick={() => {
                              setIsReplying("");
                              setReplyMessage("");
                            }}
                            disabled={message._id === loading}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            Cancel
                          </motion.button>
                        </div>
                      </motion.div>
                    )}

                    {/* Reply Status */}
                    {replySent.msgId === message._id && (
                      <div className={`mb-3 p-3 rounded-lg text-sm ${replySent.success ?
                        "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>
                        {replySent.res}
                      </div>
                    )}

                    {/* Action Buttons */}
                    {isReplying !== message._id && (
                      <div className="flex justify-end gap-2">
                        <motion.button
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg text-sm font-medium shadow-md"
                          onClick={() => handleMessageDelete(message._id)}
                          disabled={message._id === loading}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Trash2 size={14} />
                          Delete
                        </motion.button>
                        <motion.button
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg text-sm font-medium shadow-md"
                          onClick={() => {
                            setIsReplying(message._id);
                            setReplyMessage("");
                          }}
                          disabled={message._id === loading}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Reply size={14} />
                          Reply
                        </motion.button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
