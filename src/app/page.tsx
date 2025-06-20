"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] p-2 flex flex-col items-center font-sans text-black">
      {/* Header */}
      <div className="bg-white w-full max-w-md flex justify-between items-center px-2 py-1 border-b border-gray-300">
        <img src="/cris-logo.png" alt="CRIS" className="h-5 w-auto" />
        <div className="text-sm font-bold text-[#143c7c]">IR Unreserved Ticketing</div>
        <img src="/ir-logo.png" alt="Railways" className="h-5 w-auto" />
      </div>

      {/* Blue Ticket Content */}
      <div className="bg-[#c2e0f4] w-full max-w-md border border-[#b0c8d8] mt-1 px-2 py-1">
        {/* Happy Journey */}
        <div className="font-bold text-[15px] border-b border-[#8fb4c8] pb-0.5 mb-1">HAPPY JOURNEY</div>

        {/* Journey Header */}
        <div className="flex justify-between items-center text-[12px] font-bold mb-0.5">
          <span>₹10.00/-</span>
          <span>JOURNEY</span>
          <span>19/06/2025</span>
          <span>9348201604</span>
        </div>
        <div className="text-[12px] mb-1">UTS No: XRMTES3000</div>

        {/* From Station */}
        <div className="flex items-center mb-1">
          <div className="bg-[#6c2b78] w-5 h-5 rounded-full flex items-center justify-center text-white font-bold text-xs">S</div>
          <div className="ml-2 leading-tight">
            <div className="text-sm font-bold">ଭୁବନେଶ୍ୱର NEW</div>
            <div className="text-[11px]">भुवनेश्वर न्यू</div>
          </div>
        </div>

        {/* To Station */}
        <div className="flex items-center mb-1">
          <div className="bg-[#8c1a58] w-5 h-5 rounded-full flex items-center justify-center text-white font-bold text-xs">D</div>
          <div className="ml-2 leading-tight">
            <div className="text-sm font-bold">BHUBANESWAR</div>
            <div className="text-[11px]">भुवनेश्वर</div>
          </div>
        </div>

        {/* Passenger Info */}
        <div className="flex justify-between border-t border-[#8fb4c8] pt-1 text-[11px] font-semibold">
          <div>Adult: 1 &nbsp; Child: 0</div>
          <div className="text-right">
            CLASS: SECOND<br />द्वितीय<br />
            TRAIN TYPE: ORDINARY<br />साधारण
          </div>
        </div>

        {/* SAC & IR */}
        <div className="flex justify-between border-t border-[#8fb4c8] pt-1 mt-1 text-[11px] font-bold">
          <span>SAC:996411</span>
          <span>IR:21AAAGM0289C1ZV</span>
        </div>

        {/* Journey & Train Details */}
        <div className="text-[11px] mt-1">Commence Journey within 3 Hrs or Dept of First Train</div>
        <div className="flex justify-between text-[11px] mt-1 font-bold">
          <span>R29650</span>
          <span>Distance: 14 km</span>
        </div>
        <div className="text-[11px] mt-1">Booking Time: 19/06/2025 06:55</div>
      </div>

      {/* Warning Text — OUTSIDE blue */}
      <div className="w-full max-w-md mt-2 px-2 text-[11px] leading-snug text-black">
        It is recommended not to perform factory reset or change your handset whenever you are having valid ticket in the mobile.{" "}
        <a href="#" className="text-red-600 underline">Click for Changing Handset with Valid Ticket</a>
      </div>

      {/* Emergency Info */}
      <div className="w-full max-w-md text-center mt-2 text-[11px] text-red-600 font-bold leading-tight px-2">
        FOR MEDICAL EMERGENCY / FIRST AID. CONTACT TICKET CHECKING STAFF / GUARD OR DIAL 139
      </div>

      {/* Buttons */}
      <div className="w-full max-w-md mt-2 space-y-1 px-2">
        {["OPEN QR CODE","NEXT TRAINS TO BHUBANESWAR.","OK"].map((label) => (
          <button
            key={label}
            className="w-full bg-gradient-to-r from-[#ff6600] to-[#ff8533] text-white py-1 rounded-full text-[12px] font-bold shadow"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="w-full max-w-md text-center mt-2 text-[11px] text-gray-600">
        Centre for Railway Information Systems (CRIS)
      </div>
    </main>
  );
}
