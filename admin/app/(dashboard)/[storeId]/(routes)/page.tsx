import { Heading } from "@/components/ui/heading";
import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}
const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: { id: params.storeId },
  });
  if (!store) redirect("/");
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Heading title={store?.name} description="Store Dashboard" />
      </div>
    </div>
  );
};

export default DashboardPage;
