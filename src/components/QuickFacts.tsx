interface QuickFactsProps {
  facts: Record<string, string>;
}

export default function QuickFacts({ facts }: QuickFactsProps) {
  return (
    <div className="bg-gray-light border-l-4 border-gold rounded-r-lg p-5 mb-8">
      <h2 className="text-lg font-bold text-navy mb-3">Quick Facts</h2>
      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
        {Object.entries(facts).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <dt className="text-xs font-semibold text-gray-medium uppercase tracking-wide">{key}</dt>
            <dd className="text-sm text-gray-body font-medium">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
