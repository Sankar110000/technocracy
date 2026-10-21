export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white py-24">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulse ring */}
        <div className="absolute w-16 h-16 rounded-full opacity-75" />
        
        {/* Spinning loader ring */}
        <div className="relative w-12 h-12 rounded-full border-4 border-slate-100 border-t-blue-600 animate-spin shadow-sm" />
      </div>

      {/* Loading text indicator */}
      <div className="mt-6 text-center">
        <h3 className="text-sm font-semibold text-slate-800 tracking-wide">
          Loading details...
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Please wait while we fetch the latest data.
        </p>
      </div>
    </div>
  );
}