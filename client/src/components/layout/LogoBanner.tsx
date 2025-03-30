
import { cn } from "@/lib/utils";

export function LogoBanner({ className }: { className?: string }) {
  return (
    <div className={cn("w-full bg-red-100 py-4 px-2", className)}>
      <div className="container mx-auto flex items-center justify-center gap-8 flex-wrap">
        <img src="/images/us-airforce.png" alt="US Air Force" className="h-8 object-contain" />
        <img src="/images/bank-of-america.png" alt="Bank of America" className="h-8 object-contain" />
        <img src="/images/hilton.png" alt="Hilton" className="h-8 object-contain" />
        <img src="/images/hyatt.png" alt="Hyatt" className="h-8 object-contain" />
        <img src="/images/marriott.png" alt="Marriott" className="h-8 object-contain" />
        <img src="/images/trump.png" alt="Trump" className="h-8 object-contain" />
        <img src="/images/omni-hotels.png" alt="Omni Hotels" className="h-8 object-contain" />
        <img src="/images/usa-gov.png" alt="USA.gov" className="h-8 object-contain" />
      </div>
    </div>
  );
}
