import { MoreHorizontal, Moon, X, MessageCircle, Pencil, Smile, Zap, User } from 'lucide-react';

const messages = [
	{
		id: 1,
		type: 'customer',
		text: `I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.`,
		time: '1min',
	},
	{
		id: 2,
		type: 'agent',
		text: 'Let me just look into this for you, Luis.',
		time: '1min',
		seen: true,
		avatar: 'https://via.placeholder.com/20',
	},
];

const CustomerChat = () => {
	return (
		<section className="chat-area flex-1 flex flex-col bg-white h-full">
			{/* Chat Header */}
			<div className="chat-header flex justify-between items-center px-4 h-16 border-b border-[#e1e2e6]">
				<div className="chat-title font-semibold text-base">Luis Easton</div>
				<div className="header-actions flex gap-3 items-center">
					<button className="action-btn p-1 hover:bg-gray-100 rounded" title="More">
						<MoreHorizontal className="w-5 h-5" />
					</button>
					<button className="action-btn p-1 hover:bg-gray-100 rounded" title="Dark Mode">
						<Moon className="w-5 h-5" />
					</button>
					<button className="close-btn bg-black text-white px-4 py-1.5 rounded-md text-sm ml-2">
						Close
					</button>
				</div>
			</div>
			{/* Messages */}
			<div className="messages-container flex-1 overflow-y-auto px-4 py-4 bg-white flex flex-col">
				{messages.map((msg) =>
					msg.type === 'customer' ? (
						<div
							key={msg.id}
							className="message customer-message bg-[#f1f0f0] rounded-2xl mb-4 max-w-[80%] self-start p-4"
						>
							{msg.text}
							<div className="message-time text-xs text-gray-500 mt-2 ml-2">
								{msg.time}
							</div>
						</div>
					) : (
						<div
							key={msg.id}
							className="message agent-message bg-[#dfe7ff] rounded-2xl mb-4 max-w-[80%] self-end p-4"
						>
							{msg.text}
							<div className="message-footer flex items-center justify-end mt-2 gap-2 text-xs text-gray-500">
								{msg.seen && <span>Seen · {msg.time}</span>}
								{msg.avatar && (
									<img
										src={msg.avatar}
										alt="avatar"
										className="message-avatar w-5 h-5 rounded-full ml-1"
									/>
								)}
							</div>
						</div>
					)
				)}
			</div>
			{/* Chat Input */}
			<div className="chat-input-area flex items-center justify-center px-4 py-3 bg-white mb-6">
				<div className="flex items-center w-full max-w-md mx-auto">
					<div className="avatar w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-blue-400 mr-2">
						<User className="w-5 h-5 text-white" />
					</div>
					<input
						type="text"
						className="chat-input flex-1 px-5 py-3 border border-[#e1e2e6] rounded-xl text-sm focus:outline-none bg-[#f7f7f9]"
						placeholder="Send..."
					/>
				</div>
			</div>
		</section>
	);
};

export default CustomerChat;