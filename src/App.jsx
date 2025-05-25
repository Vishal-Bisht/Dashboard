import { useState, useEffect } from 'react';
import Inbox from './pages/Inbox';
import AiChat from './pages/AiChat';
import CustomerChat from './pages/CustomerChat';

const App = () => {
  // State for selected conversation/user
  const [selectedId, setSelectedId] = useState(1); // Default to first conversation
  const [aiChatCollapsed, setAiChatCollapsed] = useState(true); // Collapsed by default
  const [isMobile, setIsMobile] = useState(false);
  const [showInbox, setShowInbox] = useState(true); // For mobile: show inbox or chat

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // When conversation is selected on mobile, show chat
  const handleSelectConversation = (id) => {
    setSelectedId(id);
    if (isMobile) setShowInbox(false);
  };
  // Go back to inbox on mobile
  const handleBackToInbox = () => {
    if (isMobile) setShowInbox(true);
  };

  // On mobile, AiChat overlays the other panels
  return (
    <div className="px-1 md:px-2 flex flex-row h-screen bg-gray-50 rounded-tl-2xl rounded-tr-2xl overflow-hidden relative">
      {/* Mobile: show only one panel at a time, Desktop: show both */}
      <div className={`flex flex-row flex-1 w-full h-full`}>
        {/* Inbox: show on desktop, or on mobile if showInbox is true */}
        {(!isMobile || showInbox) && (
          <Inbox selectedId={selectedId} onSelect={handleSelectConversation} />
        )}
        {/* CustomerChat: show on desktop, or on mobile if showInbox is false */}
        {(!isMobile || !showInbox) && (
          <CustomerChat
            selectedId={selectedId}
            aiChatCollapsed={aiChatCollapsed}
            isMobile={isMobile}
            onOpenAiChat={() => setAiChatCollapsed(false)}
            onBack={handleBackToInbox}
            showBackButton={isMobile && !showInbox}
          />
        )}
      </div>
      {/* AiChat overlays on mobile, normal on desktop */}
      <div className={`transition-all duration-300 ease-in-out ${aiChatCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'} ${isMobile ? 'fixed inset-0 z-50 bg-white' : ''}`}
        style={{ willChange: 'opacity, transform' }}>
        {!aiChatCollapsed && (
          <AiChat collapsed={aiChatCollapsed} setCollapsed={setAiChatCollapsed} isMobile={isMobile} />
        )}
      </div>
    </div>
  );
};

export default App;