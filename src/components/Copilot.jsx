import { Bot, Lightbulb } from 'lucide-react';
import Details from './Details';

const Copilot = ({ activeTab, setActiveTab }) => {
  return (
    <>
      {/* Main Content & Copilot Input Wrapper */}
      <div className="flex flex-col h-full relative">
        {activeTab === 'copilot' ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center px-6">
            <div className="w-9 h-9 bg-black rounded-md flex items-center justify-center text-white mb-4">
              <Bot className="w-6 h-6" />
            </div>
            <div className="font-semibold mb-1">Hi, I'm Your AI Bot</div>
            <div className="text-gray-600 text-sm mb-4">Ask me anything about this conversation.</div>
            <div className="bg-[#f0f1f3] px-4 py-2 rounded-lg mt-4 w-full text-left text-sm flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-yellow-400" /> How do I get a refund?
            </div>
          </div>
        ) : (
          <Details />
        )}
        {/* Copilot Input (only for Copilot tab) */}
        {activeTab === 'copilot' && (
          <div className="w-full max-w-md px-6 absolute left-1/2 -translate-x-1/2 bottom-6">
            <input type="text" className="w-full px-7 py-4 border border-[#e1e2e6] rounded-xl text-sm focus:outline-none bg-[#e5e7eb] shadow-lg" placeholder="Ask a question..." />
          </div>
        )}
      </div>
    </>
  );
};

export default Copilot;
