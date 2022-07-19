interface SectionProps {
  children: React.ReactNode
  tailwindClasses?: string
}

export const Section: React.FC<SectionProps> = ({
  children,
  tailwindClasses,
}) => {
  return <section className={`${tailwindClasses}`}>{children}</section>
}
