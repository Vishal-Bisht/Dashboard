import { ChevronDown, AlertCircle, Settings, User } from "lucide-react";

const conversations = [
	{
		id: 1,
		active: true,
		avatar: <User className="w-6 h-6 text-white" />, // Blue
		avatarColor: "bg-blue-400",
		name: "Luis - Github",
		time: "45m",
		preview: "Hey! I have a question about...",
	},
	{
		id: 2,
		avatar: <User className="w-6 h-6 text-white" />, // Red
		avatarColor: "bg-red-400",
		name: "Ivan - Nike",
		time: "30m",
		priority: "3min",
		preview: "Hi there, I have a question...",
	},
	{
		id: 3,
		avatar: <User className="w-6 h-6 text-white" />, // Blue
		avatarColor: "bg-blue-400",
		name: "Lead from New York",
		time: "40m",
		preview: "Good morning, let me...",
		subAvatar: <User className="w-4 h-4 text-white" />, // Black small
		subAvatarColor: "bg-black",
	},
	{
		id: 4,
		avatar: <Settings className="w-6 h-6 text-white" />, // Black, square
		avatarColor: "bg-black rounded-md",
		name: "Breaking API problems",
		time: "45m",
		preview: "Bug report",
		subPreview: "Luis - Small Crafts",
	},
	{
		id: 5,
		avatar: <User className="w-6 h-6 text-white" />, // Purple
		avatarColor: "bg-purple-500",
		name: "Miracle - Exemplary Bank",
		time: "45m",
		preview: "Hey there, I'm here to...",
	},
];

const Inbox = () => {
	return (
		<aside className="w-[280px] bg-white border-r border-[#e1e2e6] flex flex-col h-full">
			<div className="inbox-header h-16 px-4 flex items-center font-bold border-b border-[#e1e2e6] justify-between text-base">
				<span>Your inbox</span>
			</div>
			<div className="filter-bar flex gap-2 px-4 py-2 border-b border-[#e1e2e6]">
				<div className="filter bg-white border border-[#e1e2e6] rounded px-3 py-1 text-sm flex items-center gap-1 cursor-pointer">
					5 Open <ChevronDown className="w-4 h-4" />
				</div>
				<div className="filter bg-white border border-[#e1e2e6] rounded px-3 py-1 text-sm flex items-center gap-1 cursor-pointer">
					Waiting longest <ChevronDown className="w-4 h-4" />
				</div>
			</div>
			<div className="conversation-list flex-1 overflow-y-auto">
				{conversations.map((conv) => (
					<div
						key={conv.id}
						className={`conversation-item px-4 py-3 border-b border-[#e1e2e6] cursor-pointer ${
							conv.active
								? "bg-[#edf2ff] border-l-4 border-[#6364c8]"
								: "hover:bg-[#f0f1f3]"
						}`}
					>
						<div className="conversation-header flex justify-between mb-1">
							<div className="sender-info flex items-center gap-2">
								<div
									className={`avatar w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${conv.avatarColor}`}
								>
									{conv.avatar}
								</div>
								<div className="text-sm font-medium">{conv.name}</div>
							</div>
							<div className="flex items-center gap-1">
								{conv.priority && (
									<span className="priority bg-yellow-300 text-[#333] text-[10px] px-2 py-0.5 rounded-full font-semibold flex items-center">
										<AlertCircle className="w-3 h-3 mr-1" />
										{conv.priority}
									</span>
								)}
								{conv.subAvatar && (
									<span
										className={`avatar ${conv.subAvatarColor} w-4 h-4 rounded-full flex items-center justify-center text-[8px] ml-1`}
									>
										{conv.subAvatar}
									</span>
								)}
								<span className="time text-xs text-gray-500">
									{conv.time}
								</span>
							</div>
						</div>
						<div className="conversation-preview text-gray-600 text-sm truncate">
							{conv.preview}
						</div>
						{conv.subPreview && (
							<div className="conversation-preview text-gray-400 text-xs truncate">
								{conv.subPreview}
							</div>
						)}
					</div>
				))}
			</div>
		</aside>
	);
};

export default Inbox;