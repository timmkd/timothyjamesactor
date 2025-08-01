import { Credit } from "@/lib/content";

interface CreditRowProps {
  credit: Credit;
}

const CreditRow = ({ credit }: CreditRowProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="md:col-span-1 md:pl-4">
        <span className="text-sm font-medium text-gray-900">{credit.year}</span>
      </div>
      <div className="md:col-span-1">
        <span className="text-sm text-gray-600">{credit.type}</span>
      </div>
      <div className="md:col-span-2">
        <span className="text-sm font-medium text-gray-900">
          {credit.production}
        </span>
      </div>
      <div className="md:col-span-1">
        <span className="text-sm text-gray-700">{credit.role}</span>
      </div>
      <div className="md:col-span-1">
        <div className="text-sm text-gray-600">
          <div>{credit.company}</div>
          {credit.director && (
            <div className="text-xs text-gray-500">Dir: {credit.director}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditRow;
