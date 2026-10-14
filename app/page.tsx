import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const boxes = [
  {
    title: "Overview",
    body: "A short summary of what this section covers and why it matters.",
  },
  {
    title: "Details",
    body: "More in-depth information goes here, including specifics and context.",
  },
  {
    title: "Next steps",
    body: "Actions to take next, links to related content, or follow-up items.",
  },
]

export default function Page() {
  return (
    <>
      <h1 className="text-6xl font-bold tracking-tight">Facet</h1>
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3">
        {boxes.map((box) => (
          <Accordion key={box.title} className="rounded-lg border px-4">
            <AccordionItem value={box.title}>
              <AccordionTrigger>{box.title}</AccordionTrigger>
              <AccordionContent>{box.body}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  )
}
