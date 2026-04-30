const TypingIndicator = () => {
   return (
      <div className="flex self-start gap-1 px-3 py-3 bg-gray-200 rounded-xl">
         <Dot className="bg-gray-800" />
         <Dot className="bg-yellow-800 [animation-delay:0.2s]" />

         <Dot className="bg-red-800 [animation-delay:0.4s]" />
      </div>
   );
};
type DotProps = {
   className?: string;
};
const Dot = ({ className }: DotProps) => (
   <div className={`w-3 h-3 rounded-full animate-pulse ${className}`}></div>
);
export default TypingIndicator;
