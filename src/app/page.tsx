import Reload from "~/components/controls/Reload";
import TypeControls from "~/components/controls/typeControls";
import TypeMain from "~/components/typeMain/TypeMain";
import genereateSequence from "~/utils/genereateSequence";

export default function HomePage() {
  return (
    <main className="w-full h-full">
      <TypeControls/>
      <TypeMain/>
      <Reload/>
    </main>
  );
}
