import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  onToggleAllLightsOn,
  onToggleAllLightsOff,
  ligthsCount,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        onToggleAllLightsOn={onToggleAllLightsOn}
        onToggleAllLightsOff={onToggleAllLightsOff}
        ligthsCount={ligthsCount}
      />
    </>
  );
}
