import { Bot, PanelRight, X } from 'lucide-react';
import { useState } from 'react';
import Copilot from '../components/Copilot';

const AiChat = ({ collapsed, setCollapsed, isMobile }) => {
  const [activeTab, setActiveTab] = useState('copilot');

  // Don't render anything if collapsed (handled by parent for animation)
  if (collapsed) return null;

  return (
    <aside
      className={
        `copilot-sidebar relative w-[300px] bg-[#f7f7f9] border-l border-[#e1e2e6] flex flex-col h-full transition-all duration-1000 ease-in-out overflow-hidden scrollbar-hide ${isMobile ? 'w-full max-w-full min-w-0 h-full fixed inset-0 z-50 bg-white' : ''}`
      }
    >
      {/* Topbar */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-[#e1e2e6] relative bg-white z-20">
        <div className={`flex items-center gap-1 h-full`}>
          <div className="relative h-full flex items-center">
            <button
              className={`tab font-medium px-2 text-xs md:text-sm cursor-pointer h-full flex items-center focus:outline-none bg-transparent border-none ${activeTab === 'copilot' ? 'active text-[#6364c8]' : 'text-gray-500'}`}
              onClick={() => setActiveTab('copilot')}
            >
              <Bot className="w-5 h-5 mr-1" />
              <span className="xs:hidden">Copilot</span>
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
              className={`tab font-medium px-3 py-0 text-xs md:text-sm cursor-pointer h-full flex items-center focus:outline-none bg-transparent border-none ${activeTab === 'details' ? 'active text-[#6364c8]' : 'text-gray-500'}`}
              onClick={() => setActiveTab('details')}
            >
              <span className="xs:hidden">Details</span>
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
        {/* Close icon on mobile */}
        {isMobile ? (
          <button
            className="p-2 hover:bg-gray-100 rounded z-30 block md:hidden"
            title={'Close'}
            onClick={() => setCollapsed(true)}
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        ) : (
          <button
            className="p-2 hover:bg-gray-100 rounded z-30 hidden md:block"
            title={'Collapse'}
            onClick={() => setCollapsed(true)}
          >
            <PanelRight className="w-5 h-5 text-gray-500" />
          </button>
        )}
      </div>
      {/* Main Content */}
      <Copilot activeTab={activeTab} setActiveTab={setActiveTab} />
    </aside>
  );
};

export default AiChat;