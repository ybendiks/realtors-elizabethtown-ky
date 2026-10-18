import { agentsFor, isPrincipal, ROLE_LABEL, AGENTS_SOURCE } from "@/data/agents";

interface Props {
  brokerageSlug: string;
  /** Overrides the default "Agents at X" heading. */
  heading?: string;
}

/**
 * Lists the licensed agents at one brokerage.
 *
 * Every competing page that outranks this site for "realtors in elizabethtown ky"
 * lists named individual people rather than offices, which is the gap this
 * closes. Only name, phone and membership class are shown, because that is all
 * the association roster publishes and nothing here is inferred.
 */
export default function AgentList({ brokerageSlug, heading }: Props) {
  const all = agentsFor(brokerageSlug);
  if (all.length === 0) return null;

  // Designated and managing brokers first; the roster order is otherwise by surname.
  const sorted = [...all].sort(
    (a, b) => Number(isPrincipal(b)) - Number(isPrincipal(a)),
  );

  return (
    <>
      <h2 className="text-2xl font-bold text-navy mt-10 mb-2">
        {heading ?? `Agents at this brokerage (${all.length})`}
      </h2>
      <p className="text-xs text-gray-medium mb-4">
        From the {AGENTS_SOURCE.source}, checked {AGENTS_SOURCE.checkedOn}.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 list-none pl-0">
        {sorted.map((a) => (
          <li
            key={a.hkarId}
            className="flex items-baseline justify-between border-b border-gray-border py-2 text-sm"
          >
            <span className="text-gray-body">
              {a.name}
              {isPrincipal(a) && (
                <span className="ml-2 text-xs text-gray-medium">
                  {ROLE_LABEL[a.role]}
                </span>
              )}
            </span>
            <a
              href={`tel:${a.phone.replace(/[^0-9]/g, "")}`}
              className="text-navy font-medium hover:text-gold-dark whitespace-nowrap ml-3"
            >
              {a.phone}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
