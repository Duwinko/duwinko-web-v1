export function SectionRule({ label }: { label?: string }) {
  return (
    <div className="section-rule py-6" aria-hidden={label ? undefined : true}>
      <span className="node" />
      {label ? <span className="section-chip">{label}</span> : null}
      <span className="node" />
    </div>
  );
}
