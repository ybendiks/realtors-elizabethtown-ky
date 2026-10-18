import JsonLd from "./JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
  heading?: string;
  /**
   * Emit FAQPage structured data. Default true.
   *
   * Set false when the page already emits FAQPage schema from another block, 
   * two FAQPage objects on one page is a structured-data error, and Google
   * will usually drop both rather than pick one.
   */
  schema?: boolean;
}

/**
 * Renders an FAQ block and its FAQPage structured data from one source.
 *
 * This exists because the question/answer text was previously duplicated on
 * each page that had an FAQ: once inside a local `faqData` array for the
 * schema, and again in the markup. The two copies could drift, which means
 * publishing structured data that does not match the visible page, something
 * Google treats as a quality problem rather than a harmless mismatch.
 */
export default function Faq({ items, heading = "Frequently Asked Questions", schema = true }: Props) {
  if (items.length === 0) return null;

  return (
    <>
      {schema && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }}
        />
      )}

      <h2 className="text-2xl font-bold text-navy mt-10 mb-4">{heading}</h2>
      <dl className="mb-8 space-y-4">
        {items.map((item) => (
          <div key={item.question} className="border-b border-gray-border pb-4">
            <dt className="font-semibold text-navy mb-2">{item.question}</dt>
            <dd className="text-gray-body">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </>
  );
}
