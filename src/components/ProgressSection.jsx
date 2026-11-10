
function ProgressSection({
  total,
  completed,
  active,
  percentage,
  progressMessage,
}) {
  return (
    <section className="progress-section">
      <div className="progress-info">
        <div>
          <p className="section-label">TODAY'S PROGRESS</p>
          <h2>{progressMessage}</h2>
        </div>

        <div className="progress-number">
          {percentage}%
        </div>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="progress-footer">
        <span>{completed} completed</span>
        <span>{active} remaining</span>
      </div>
    </section>
  );
}

export default ProgressSection;
