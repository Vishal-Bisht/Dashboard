import { Bot, PanelLeft } from 'lucide-react';
import { useState } from 'react';
import Copilot from '../components/Copilot';

const AiChat = () => {
  const [activeTab, setActiveTab] = useState('copilot');

  return (
    <aside className="copilot-sidebar w-[300px] bg-[#f7f7f9] border-l border-[#e1e2e6] flex flex-col h-full">
      {/* Topbar */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-[#e1e2e6] relative bg-white">
        <div className="flex items-center gap-1 h-full">
          <div className="relative h-full flex items-center">
            <button
              className={`tab font-medium px-2 text-sm cursor-pointer h-full flex items-center focus:outline-none bg-transparent border-none ${activeTab === 'copilot' ? 'active text-[#6364c8]' : 'text-gray-500'}`}
              onClick={() => setActiveTab('copilot')}
            >
              <Bot className="w-5 h-5 mr-1" />
              Copilot
            </button>
            {activeTab === 'copilot' && (
              <span
                className="absolute left-1 right-1"
                style={{
                  bottom: '-4px',
                  height: '4px',
                  background: '#6364c8',
                  borderRadius: '2px',
                }}
              ></span>
            )}
          </div>
          <div className="relative h-full flex items-center">
            <button
              className={`tab font-medium px-3 py-0 text-sm cursor-pointer h-full flex items-center focus:outline-none bg-transparent border-none ${activeTab === 'details' ? 'active text-[#6364c8]' : 'text-gray-500'}`}
              onClick={() => setActiveTab('details')}
            >
              Details
            </button>
            {activeTab === 'details' && (
              <span
                className="absolute left-1 right-1"
                style={{
                  bottom: '-4px',
                  height: '4px',
                  background: '#6364c8',
                  borderRadius: '2px',
                }}
              ></span>
            )}
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded" title="Collapse">
          <PanelLeft className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      {/* Main Content */}
      <Copilot activeTab={activeTab} setActiveTab={setActiveTab} />
    </aside>
  );
};

export default AiChat;