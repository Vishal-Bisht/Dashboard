import { MoreHorizontal, Moon, X, MessageCircle, Pencil, Smile, Zap, User, Bot, PanelRight } from 'lucide-react';
import messages from '../Data/messages';

const CustomerChat = ({ selectedId, aiChatCollapsed, onExpandAiChat, isMobile, onOpenAiChat, onBack, showBackButton }) => {
	const filteredMessages = messages.filter((msg) => msg.convId === selectedId);
	return (
		<section className="chat-area flex-1 flex flex-col bg-white h-full min-h-screen relative">
			{/* Chat Header */}
			<div className="chat-header flex justify-between items-center px-2 md:px-4 h-14 md:h-16 border-b border-[#e1e2e6]">
				<div className="flex items-center gap-2">
					{/* Back button for mobile */}
					{showBackButton && (
						<button className="action-btn p-1 hover:bg-gray-100 rounded block md:hidden" title="Back to Inbox" onClick={onBack}>
							<svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
						</button>
					)}
					<div className="chat-title font-semibold text-sm md:text-base lg:text-lg">
						{filteredMessages[0]?.user || 'Customer'}
					</div>
				</div>
				<div className="header-actions flex gap-2 md:gap-3 items-center">
					{/* Show AI Bot icon on mobile only */}
					{isMobile && (
						<button className="action-btn p-1 hover:bg-gray-100 rounded block md:hidden" title="Open Copilot Panel" onClick={onOpenAiChat}>
							<Bot className="w-5 h-5 text-[#6364c8]" />
						</button>
					)}
					{/* PanelRight icon */}
					{!isMobile && aiChatCollapsed && (
						<button className="action-btn p-1 hover:bg-gray-100 rounded hidden md:block" title="Open Copilot Panel" onClick={onOpenAiChat}>
							<PanelRight className="w-5 h-5 text-[#6364c8]" />
						</button>
					)}
					<button className="action-btn p-1 hover:bg-gray-100 rounded" title="More">
						<MoreHorizontal className="w-5 h-5" />
					</button>
					<button className="action-btn p-1 hover:bg-gray-100 rounded" title="Dark Mode">
						<Moon className="w-5 h-5" />
					</button>
					<button className="close-btn bg-black text-white px-2 py-1 md:px-4 md:py-1.5 rounded-md text-xs md:text-sm ml-1 md:ml-2">
						Close
					</button>
				</div>
			</div>
			{/* Messages */}
			<div className="messages-container flex-1 px-2 md:px-4 py-2 md:py-4 bg-white flex flex-col scrollbar-hide mb-[70px] md:mb-[110px] overflow-y-auto">
				{filteredMessages.map((msg, idx) => {
					if (msg.type === 'customer') {
						return (
							<div
								key={msg.id}
								className="message customer-message bg-[#f1f0f0] rounded-2xl mb-2 md:mb-4 max-w-[80%] self-start p-2 md:p-4 text-sm md:text-md"
							>
								{msg.text}
								<div className="message-time text-[10px] md:text-xs text-gray-500 mt-1 md:mt-2 ml-1 md:ml-2">
									{msg.time}
								</div>
							</div>
						);
					} else {
						// For the last two agent messages, use user icon and color
						const isLastTwo = idx >= filteredMessages.length - 2;
						return (
							<div className="flex items-end justify-end" key={msg.id}>
								<div
									className="message agent-message bg-[#dfe7ff] rounded-2xl mb-2 md:mb-4 max-w-[80%] self-end p-2 md:p-4 text-xs md:text-sm"
								>
									{msg.text}
									<div className="message-footer flex items-center justify-end mt-1 md:mt-2 gap-1 md:gap-2 text-[10px] md:text-xs text-gray-500">
										{msg.seen && (
											<span className="flex items-center gap-0.5">
												<span className="relative w-4 h-4 inline-block">
													<svg className="absolute left-1 top-0.5 w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
													<svg className="absolute left-1.5 top-1 w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
												</span>
												<span className="ml-1">{msg.time}</span>
											</span>
										)}
									</div>
								</div>
								<span className={`w-6 h-6 md:w-7 md:h-7 rounded-full ml-2 md:ml-3 mb-1 md:mb-2 flex items-center justify-center shrink-0 shadow-md ${isLastTwo ? 'bg-blue-400' : 'bg-black'}`}>
									{isLastTwo ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
								</span>
							</div>
						);
					}
				})}
			</div>
			<div className="chat-input-area w-full flex items-center justify-center px-2 md:px-4 py-2 md:py-3 bg-transparent mb-0 md:mb-6 fixed bottom-0 left-0 right-0 z-20">
				<div className="flex items-center mx-auto" style={{ width: '100%', maxWidth: '672px' }}>
					<div className="avatar w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-xs md:text-xs font-bold bg-blue-400 mr-1 md:mr-2">
						<User className="w-5 h-5 text-white" />
					</div>
					<input
						type="text"
						className="chat-input flex-1 min-w-[120px] max-w-2xl px-4 md:px-7 py-2 md:py-4 border border-[#e1e2e6] rounded-xl text-xs md:text-sm focus:outline-none bg-[#e5e7eb] shadow-lg"
						placeholder="Send..."
					/>
				</div>
			</div>
		</section>
	);
};

export default CustomerChat;