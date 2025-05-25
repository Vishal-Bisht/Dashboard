import { useState } from 'react';
import { ChevronDown, Plus, Link2, User, Phone, Mail, MapPin, Tag, Flag, MessageCircle, Building2, Users, Briefcase, CreditCard, Calendar, Ticket, CheckCircle } from 'lucide-react';

const Details = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="bg-white h-full flex flex-col text-left px-0 py-0">
      <div className="flex-1 flex flex-col gap-0 overflow-y-auto">
        {/* Assignee Section */}
        <div className="panel-section rounded-lg bg-white p-4">
          <div className="panel-content">
            <div className="assignee-row flex justify-between items-center mb-1">
              <div className="text-sm text-gray-500 font-semibold">Assignee</div>
              <div className="flex items-center">
                <User className="w-5 h-5 text-[#6364c8]" />
                <span className="font-medium text-sm text-black">Brian Byrne</span>
              </div>
            </div>
            <div className="assignee-row flex justify-between items-center">
              <div className="text-sm text-gray-500 font-semibold">Team</div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#6364c8]" />
                <span className="font-medium text-sm text-black">Unassigned</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#e1e2e6] w-full" />
        {/* Accordions */}
        <div className="flex flex-col gap-0 mt-0">
          {/* LINKS */}
          <div className="panel-section rounded-lg bg-white">
            <div className="panel-header flex items-center justify-between px-4 py-3 cursor-pointer select-none" onClick={() => handleAccordion('links')}>
              <span className="text-sm font-bold tracking-wide text-black">LINKS</span>
              <ChevronDown className="w-4 h-4 text-black transition-transform duration-200" style={{ transform: openAccordion === 'links' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </div>
            {openAccordion === 'links' && (
              <div className="panel-content px-4 pb-3 flex flex-col gap-2">
                <div className="link-row flex justify-between items-center">
                  <span className="flex items-center gap-2 text-xs text-black"><Link2 className="w-4 h-4 text-[#6364c8]" />Tracker ticket</span>
                  <button className="add-btn text-[#6364c8] hover:bg-[#e6e7fa] rounded p-1"><Plus className="w-4 h-4" /></button>
                </div>
                <div className="link-row flex justify-between items-center">
                  <span className="flex items-center gap-2 text-xs text-black"><Tag className="w-4 h-4 text-[#6364c8]" />Back-office tickets</span>
                  <button className="add-btn text-[#6364c8] hover:bg-[#e6e7fa] rounded p-1"><Plus className="w-4 h-4" /></button>
                </div>
                <div className="link-row flex justify-between items-center">
                  <span className="flex items-center gap-2 text-xs text-black"><MessageCircle className="w-4 h-4 text-[#6364c8]" />Side conversations</span>
                  <button className="add-btn text-[#6364c8] hover:bg-[#e6e7fa] rounded p-1"><Plus className="w-4 h-4" /></button>
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-[#e1e2e6] w-full" />
          {/* USER DATA */}
          <div className="panel-section rounded-lg bg-white">
            <div className="panel-header flex items-center justify-between px-4 py-3 cursor-pointer select-none" onClick={() => handleAccordion('userData')}>
              <span className="text-sm font-bold tracking-wide text-black">USER DATA</span>
              <ChevronDown className="w-4 h-4 text-black transition-transform duration-200" style={{ transform: openAccordion === 'userData' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </div>
            {openAccordion === 'userData' && (
              <div className="panel-content px-4 pb-3 flex flex-col gap-2">
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><Mail className="w-4 h-4 text-[#6364c8]" />Email</span><span className="text-sm text-black">user@email.com</span></div>
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><Phone className="w-4 h-4 text-[#6364c8]" />Phone</span><span className="text-sm text-black">+1 234 567 890</span></div>
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><MapPin className="w-4 h-4 text-[#6364c8]" />Location</span><span className="text-sm text-black">New York, USA</span></div>
              </div>
            )}
          </div>
          <div className="border-t border-[#e1e2e6] w-full" />
          {/* CONVERSATION ATTRIBUTES */}
          <div className="panel-section rounded-lg bg-white">
            <div className="panel-header flex items-center justify-between px-4 py-3 cursor-pointer select-none" onClick={() => handleAccordion('conversation')}>
              <span className="text-sm font-bold tracking-wide text-black">CONVERSATION ATTRIBUTES</span>
              <ChevronDown className="w-4 h-4 text-black transition-transform duration-200" style={{ transform: openAccordion === 'conversation' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </div>
            {openAccordion === 'conversation' && (
              <div className="panel-content px-4 pb-3 flex flex-col gap-2">
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><Flag className="w-4 h-4 text-[#6364c8]" />Status</span><span className="text-sm text-black">Open</span></div>
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><Tag className="w-4 h-4 text-[#6364c8]" />Priority</span><span className="text-sm text-black">High</span></div>
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><MessageCircle className="w-4 h-4 text-[#6364c8]" />Channel</span><span className="text-sm text-black">Email</span></div>
              </div>
            )}
          </div>
          <div className="border-t border-[#e1e2e6] w-full" />
          {/* COMPANY DETAILS */}
          <div className="panel-section rounded-lg bg-white">
            <div className="panel-header flex items-center justify-between px-4 py-3 cursor-pointer select-none" onClick={() => handleAccordion('company')}>
              <span className="text-sm font-bold tracking-wide text-black">COMPANY DETAILS</span>
              <ChevronDown className="w-4 h-4 text-black transition-transform duration-200" style={{ transform: openAccordion === 'company' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </div>
            {openAccordion === 'company' && (
              <div className="panel-content px-4 pb-3 flex flex-col gap-2">
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><Building2 className="w-4 h-4 text-[#6364c8]" />Company</span><span className="text-sm text-black">Acme Inc.</span></div>
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><Users className="w-4 h-4 text-[#6364c8]" />Industry</span><span className="text-sm text-black">Technology</span></div>
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><Briefcase className="w-4 h-4 text-[#6364c8]" />Employees</span><span className="text-sm text-black">500+</span></div>
              </div>
            )}
          </div>
          <div className="border-t border-[#e1e2e6] w-full" />
          {/* SALESFORCE */}
          <div className="panel-section rounded-lg bg-white">
            <div className="panel-header flex items-center justify-between px-4 py-3 cursor-pointer select-none" onClick={() => handleAccordion('salesforce')}>
              <span className="text-sm font-bold tracking-wide text-black">SALESFORCE</span>
              <ChevronDown className="w-4 h-4 text-black transition-transform duration-200" style={{ transform: openAccordion === 'salesforce' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </div>
            {openAccordion === 'salesforce' && (
              <div className="panel-content px-4 pb-3 flex flex-col gap-2">
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><CreditCard className="w-4 h-4 text-[#6364c8]" />Account ID</span><span className="text-sm text-black">SF-123456</span></div>
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><Flag className="w-4 h-4 text-[#6364c8]" />Stage</span><span className="text-sm text-black">Prospect</span></div>
              </div>
            )}
          </div>
          <div className="border-t border-[#e1e2e6] w-full" />
          {/* STRIPE */}
          <div className="panel-section rounded-lg bg-white">
            <div className="panel-header flex items-center justify-between px-4 py-3 cursor-pointer select-none" onClick={() => handleAccordion('stripe')}>
              <span className="text-sm font-bold tracking-wide text-black">STRIPE</span>
              <ChevronDown className="w-4 h-4 text-black transition-transform duration-200" style={{ transform: openAccordion === 'stripe' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </div>
            {openAccordion === 'stripe' && (
              <div className="panel-content px-4 pb-3 flex flex-col gap-2">
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><CreditCard className="w-4 h-4 text-[#6364c8]" />Customer ID</span><span className="text-sm text-black">cus_ABC123</span></div>
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><Calendar className="w-4 h-4 text-[#6364c8]" />Last Payment</span><span className="text-sm text-black">2025-05-01</span></div>
              </div>
            )}
          </div>
          <div className="border-t border-[#e1e2e6] w-full" />
          {/* JIRA FOR TICKETS */}
          <div className="panel-section rounded-lg bg-white">
            <div className="panel-header flex items-center justify-between px-4 py-3 cursor-pointer select-none" onClick={() => handleAccordion('jira')}>
              <span className="text-sm font-bold tracking-wide text-black">JIRA FOR TICKETS</span>
              <ChevronDown className="w-4 h-4 text-black transition-transform duration-200" style={{ transform: openAccordion === 'jira' ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </div>
            {openAccordion === 'jira' && (
              <div className="panel-content px-4 pb-3 flex flex-col gap-2">
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><Ticket className="w-4 h-4 text-[#6364c8]" />Ticket ID</span><span className="text-sm text-black">JIRA-7890</span></div>
                <div className="flex justify-between items-center"><span className="flex items-center gap-2 text-sm text-black"><CheckCircle className="w-4 h-4 text-[#6364c8]" />Status</span><span className="text-sm text-black">In Progress</span></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
