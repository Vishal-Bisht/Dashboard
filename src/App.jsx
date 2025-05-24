import Inbox from './pages/Inbox';
import AiChat from './pages/AiChat';
import CustomerChat from './pages/CustomerChat';

const App = () => {
  return (
    <div className="px-2 flex flex-row h-screen bg-gray-50 rounded-tl-2xl rounded-tr-2xl overflow-hidden">
      <Inbox />
      <CustomerChat />
      <AiChat />
    </div>
  );
};

export default App;