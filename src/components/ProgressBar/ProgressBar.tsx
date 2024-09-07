type Props = {
  percent: number;
  hideLegend?: boolean;
};
function ProgressBar({ percent, hideLegend = false }: Props) {
  return (
    <>
      <div className="relative h-2 bg-gray-300">
        <div
          className="absolute top-0 left-0 h-full bg-gray-800"
          style={{ width: `${percent}%` }}
        />
      </div>
      {!hideLegend && <span>Avance: {percent}%</span>}
    </>
  );
}

export default ProgressBar;
