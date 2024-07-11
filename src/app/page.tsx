import LearnNvim from "@/components/LearnNvim";
import MainMenu from "@/components/MainMenu";

export default function Home() {
  return (
    <main>
      <div className="w-full h-full flex-col flex justify-center items-center h-screen whitespace-pre font-mono">
        <LearnNvim />
        <div className="mt-8">
          <MainMenu />
        </div>
      </div>
    </main>
  );
}
