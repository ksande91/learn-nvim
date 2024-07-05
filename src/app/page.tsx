import DashboardMenuItem from "@/components/DashboardMenuItem";
import LearnNvim from "@/components/LearnNvim";

export default function Home() {
  return (
    <main>
      <div className="w-full h-full flex-col flex justify-center items-center h-screen whitespace-pre font-mono">
        <LearnNvim />
        <div className="mt-8">
          <DashboardMenuItem number={0} path="Learn the basics" />
        </div>
      </div>
    </main>
  );
}
