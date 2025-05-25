import { ChevronDown, AlertCircle } from "lucide-react";
import conversations from "../Data/conversations";

const Inbox = ({ selectedId, onSelect }) => {
	return (
		<aside className="bg-white border-r border-[#e1e2e6] flex flex-col h-full z-20 w-1/3 min-w-[100px] max-w-[200px] md:w-[320px] md:min-w-[320px] md:max-w-[320px] scrollbar-hide">
			<div className="inbox-header h-16 px-4 flex items-center font-bold border-b border-[#e1e2e6] justify-between text-base md:text-lg lg:text-xl relative">
				<span>Your inbox</span>
			</div>
			<div className="filter-bar flex gap-1 px-2 py-2">
				<div className="filter bg-white rounded px-2 py-1 text-[10px] md:text-xs flex items-center gap-1 cursor-pointer font-semibold min-w-0 max-w-[80px] truncate">
					5 Open <ChevronDown className="w-3 h-3" />
				</div>
				<div className="filter bg-white rounded px-2 py-1 text-[10px] md:text-xs flex items-center gap-1 cursor-pointer font-semibold min-w-0 max-w-[110px] truncate">
					Waiting longest <ChevronDown className="w-3 h-3" />
				</div>
			</div>
			<div className="conversation-list flex-1 px-1 overflow-y-auto scrollbar-hide">
				{conversations.map((conv) => (
					<div
						key={conv.id}
						onClick={() => onSelect(conv.id)}
						className={`conversation-item px-4 py-3 border-b border-[#e1e2e6] cursor-pointer ${
							selectedId === conv.id
								? "bg-[#edf2ff] border-b-2 border-[#6364c8]"
								: "hover:bg-[#f0f1f3]"
						} rounded-2xl`}
					>
						<div className="conversation-header flex justify-between mb-1">
							<div className="sender-info flex items-center gap-1">
								<div
									className={`avatar w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-[9px] md:text-xs font-bold ${conv.avatarColor}`}
								>
									{conv.avatar}
								</div>
								<div className="text-[10px] md:text-xs font-medium">
									{conv.name}
								</div>
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
						<div className="conversation-preview text-gray-600 text-[10px] md:text-xs truncate">
							{conv.preview}
						</div>
						{conv.subPreview && (
							<div className="conversation-preview text-gray-400 text-[9px] md:text-[10px] truncate">
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