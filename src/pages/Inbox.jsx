import { useState } from "react";
import { ChevronDown, AlertCircle } from "lucide-react";
import conversations from "../Data/conversations";

const Inbox = ({ selectedId, onSelect }) => {
	const [openDropdown, setOpenDropdown] = useState(null);

	const handleDropdown = (name) => {
		setOpenDropdown(openDropdown === name ? null : name);
	};

	return (
		<aside className="bg-white border-r border-[#e1e2e6] flex flex-col h-full z-20 w-full md:w-[320px] min-w-0 md:min-w-[320px] max-w-full md:max-w-[320px] scrollbar-hide">
			<div className="inbox-header h-16 px-4 flex items-center font-bold border-b border-[#e1e2e6] justify-between text-base md:text-lg lg:text-xl relative">
				<span>Your inbox</span>
				{/* For Mobile screen size filters: right side of topbar */}
				<div className="filter-bar flex md:hidden gap-1 ml-2 absolute right-4 top-1/2 -translate-y-1/2">
					{/* Open filter dropdown */}
					<div className="relative">
						<button
							className="filter bg-white rounded px-2 py-1 text-xs md:text-sm flex items-center gap-1 cursor-pointer font-semibold min-w-0 max-w-[120px] truncate"
							onClick={() => handleDropdown("open")}
						>
							5 Open
							<ChevronDown
								className={`w-3 h-3 transition-transform ml-1 ${
									openDropdown === "open" ? "rotate-180" : ""
								}`}
							/>
						</button>
						{openDropdown === "open" && (
							<div className="absolute left-0 mt-1 w-28 bg-white border border-gray-200 rounded shadow z-10">
								<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
									All
								</div>
								<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
									Open
								</div>
								<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
									Closed
								</div>
								<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
									Archived
								</div>
							</div>
						)}
					</div>
					{/* Waiting longest filter dropdown */}
					<div className="relative">
						<button
							className="filter bg-white rounded px-2 py-1 text-xs md:text-sm flex items-center gap-1 cursor-pointer font-semibold min-w-0 max-w-[150px]"
							onClick={() => handleDropdown("waiting")}
						>
							Waiting longest
							<ChevronDown
								className={`w-3 h-3 transition-transform ml-1 ${
									openDropdown === "waiting" ? "rotate-180" : ""
								}`}
							/>
						</button>
						{openDropdown === "waiting" && (
							<div className="absolute left-0 mt-1 w-32 bg-white border border-gray-200 rounded shadow z-10">
								<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
									Oldest
								</div>
								<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
									Newest
								</div>
								<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
									Unassigned
								</div>
								<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
									Assigned
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			{/* For Desktop screen size filters: below header, left side */}
			<div className="md:flex hidden filter-bar gap-1 px-2 py-2">
				{/* Open filter dropdown */}
				<div className="relative">
					<button
						className="filter bg-white rounded px-2 py-1 text-xs md:text-sm flex items-center gap-1 cursor-pointer font-semibold min-w-0 max-w-[120px] truncate"
						onClick={() => handleDropdown("open")}
					>
						5 Open
						<ChevronDown
							className={`w-3 h-3 transition-transform ml-1 ${
								openDropdown === "open" ? "rotate-180" : ""
							}`}
						/>
					</button>
					{openDropdown === "open" && (
						<div className="absolute left-0 mt-1 w-28 bg-white border border-gray-200 rounded shadow z-10">
							<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
								All
							</div>
							<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
								Open
							</div>
							<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
								Closed
							</div>
							<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
								Archived
							</div>
						</div>
					)}
				</div>
				{/* Waiting longest filter dropdown */}
				<div className="relative">
					<button
						className="filter bg-white rounded px-2 py-1 text-xs md:text-sm flex items-center gap-1 cursor-pointer font-semibold min-w-0 max-w-[150px]"
						onClick={() => handleDropdown("waiting")}
					>
						Waiting longest
						<ChevronDown
							className={`w-3 h-3 transition-transform ml-1 ${
								openDropdown === "waiting" ? "rotate-180" : ""
							}`}
						/>
					</button>
					{openDropdown === "waiting" && (
						<div className="absolute left-0 mt-1 w-32 bg-white border border-gray-200 rounded shadow z-10">
							<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
								Oldest
							</div>
							<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
								Newest
							</div>
							<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
								Unassigned
							</div>
							<div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-xs">
								Assigned
							</div>
						</div>
					)}
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
						<div className="conversation-header flex items-center mb-1">
							<div
								className={`avatar w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center text-md md:text-md font-bold mr-2 shrink-0 ${conv.avatarColor}`}
							>
								{conv.avatar}
							</div>
							<div className="flex flex-col flex-1 min-w-0">
								<div className="flex items-center gap-1">
									<div className="sm:text-xs text-sm font-medium md:text-md lg:text-base truncate">
										{conv.name}
									</div>
									{conv.priority && (
										<span className="priority bg-yellow-300 text-[#333] text-[10px] px-2 py-0.5 rounded-full font-semibold flex items-center ml-1">
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
									<span className="time text-xs text-gray-500 ml-1">
										{conv.time}
									</span>
								</div>
								<div className="conversation-preview text-gray-600 text-sm md:text-xs truncate">
									{conv.preview}
								</div>
								{conv.subPreview && (
									<div className="conversation-preview text-gray-400 text-[9px] md:text-[10px] truncate">
										{conv.subPreview}
									</div>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</aside>
	);
};

export default Inbox;