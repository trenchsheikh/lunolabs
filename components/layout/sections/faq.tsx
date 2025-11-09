import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Do you share pricing?",
    answer:
      "We scope every project—reach out for a proposal tailored to your goals and timeline. Every build is unique, so we provide custom quotes after understanding your specific needs.",
    value: "item-1",
  },
  {
    question: "What stacks do you use?",
    answer:
      "Modern web (React/Next, TypeScript), mobile (React Native/Expo), on chain tooling across EVM/Solana/others, and agentic AI with MCP. We choose the best tools for your specific use case.",
    value: "item-2",
  },
  {
    question: "How fast can we start?",
    answer:
      "We move quickly—after scoping, we can typically begin within a few days. Once we understand your requirements, we'll set up the project, establish milestones, and start building.",
    value: "item-3",
  },
  {
    question: "Do you work with non crypto products?",
    answer:
      "Yes—roughly half our builds are traditional web apps and mobile products. We're equally comfortable building fintech apps, education platforms, dashboards, or any production grade software.",
    value: "item-4",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
