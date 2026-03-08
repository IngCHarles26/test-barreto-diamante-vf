import { Loading, LogOut, SideBarDesktop, SideBarMobile } from "@/components";
import { getUserInfo } from "@/lib/server";
import { Suspense } from "react";

async function DashboardContent({ children }: { children: React.ReactNode }) {

  await getUserInfo(); 
  
  return (
    <>
      <SideBarDesktop />
      <SideBarMobile />
      <LogOut />
      
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </>
  );
}

export default function DasnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex font-display h-dvh w-full">
      <Suspense fallback={<Loading />}>
        <DashboardContent>
          {children}
        </DashboardContent>
      </Suspense>
    </section>
  );
}