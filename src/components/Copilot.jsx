import { Bot, Lightbulb } from 'lucide-react';
import Details from './Details';

const Copilot = ({ activeTab, setActiveTab }) => {
  return (
    <>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {activeTab === 'copilot' ? (
          <div className="copilot-content flex flex-col items-center justify-center flex-1 text-center px-6">
            <div className="copilot-avatar w-9 h-9 bg-black rounded-md flex items-center justify-center text-white mb-4">
              <Bot className="w-6 h-6" />
            </div>
            <div className="copilot-title font-semibold mb-1">Hi, I'm Your AI Bot</div>
            <div className="copilot-subtitle text-gray-600 text-sm mb-4">Ask me anything about this conversation.</div>
            <div className="suggested-question bg-[#f0f1f3] px-4 py-2 rounded-lg mt-4 w-full text-left text-sm flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-yellow-400" /> How do I get a refund?
            </div>
          </div>
        ) : (
          <Details />
        )}
      </div>
      {/* Copilot Input (only for Copilot tab) */}
      {activeTab === 'copilot' && (
        <div className="copilot-input mt-auto px-6 py-4">
          <input type="text" className="ask-input w-full px-3 py-2 border border-[#e1e2e6] rounded text-sm focus:outline-none" placeholder="Ask a question..." />
        </div>
      )}
    </>
  );
};

export default Copilot;
