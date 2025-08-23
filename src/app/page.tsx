import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import { AppPieChart } from "@/components/AppPieChart";
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg overflow-scroll">
        <CardList title="users" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg overflow-scroll">
        Test grid
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="countries" />
      </div>
    </section>
  );
}
