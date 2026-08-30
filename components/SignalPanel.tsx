const stages = [
  {
    number: "01",
    title: "Frame the decision",
    text: "Define the operational constraint, success metric and failure cost before choosing a model.",
  },
  {
    number: "02",
    title: "Prove the approach",
    text: "Benchmark the smallest credible solution on real data and expose its failure modes early.",
  },
  {
    number: "03",
    title: "Build for production",
    text: "Engineer deployment, observability and feedback loops so performance survives outside the notebook.",
  },
] as const;

export function SignalPanel() {
  return (
    <aside className="delivery-panel" aria-labelledby="delivery-title">
      <div className="delivery-panel-top">
        <div>
          <p className="eyebrow">How Bitoom works</p>
          <h2 id="delivery-title">From difficult question to dependable system.</h2>
        </div>
        <span className="delivery-badge">R&amp;D → PROD</span>
      </div>

      <ol className="delivery-steps">
        {stages.map((stage) => (
          <li className="delivery-step" key={stage.number}>
            <span className="delivery-step-index">{stage.number}</span>
            <div>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="delivery-outcome">
        <span>What you get</span>
        <strong>Evidence, maintainable software and a clear path forward.</strong>
      </div>
    </aside>
  );
}
