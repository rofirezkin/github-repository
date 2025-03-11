type AccordionProps = {
  renderContent: React.ReactNode;
  renderTitle: React.ReactNode;
  onClick: () => void;
  isOpen: boolean;
};

export default function Accordion({
  renderContent,
  renderTitle,
  onClick,
  isOpen,
}: AccordionProps) {
  return (
    <section className="my-2">
      <button
        onClick={onClick}
        className="flex justify-between w-full py-3 items-center bg-gray-100"
      >
        <div>{renderTitle}</div>

        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
          </svg>
        )}
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-100 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{renderContent}</div>
      </div>
    </section>
  );
}
