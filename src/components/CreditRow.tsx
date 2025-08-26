import { Credit } from "@/lib/content";

interface CreditRowProps {
  credit: Credit;
}

const CreditRow = ({ credit }: CreditRowProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-4 border-b border-[--color-border]/40 hover:bg-[--color-background] transition-colors">
      <div className="md:col-span-1 md:pl-4">
        <span className="text-sm font-medium text-[--color-foreground]">
          {credit.year}
        </span>
      </div>
      <div className="md:col-span-1">
        <span className="text-sm text-[--color-muted]">{credit.type}</span>
      </div>
      <div className="md:col-span-2">
        <span className="text-sm font-medium text-[--color-foreground]">
          {credit.production}
        </span>
      </div>
      <div className="md:col-span-1">
        <span className="text-sm text-[--color-foreground]">{credit.role}</span>
      </div>
      <div className="md:col-span-1">
        <div className="text-sm text-[--color-muted]">
          <div>{credit.company}</div>
          {credit.director && (
            <div className="text-xs text-[--color-muted]">
              Dir: {credit.director}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditRow;
