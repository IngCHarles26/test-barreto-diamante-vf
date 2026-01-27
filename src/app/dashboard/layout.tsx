import { SideBarDesktop, SideBarMobile } from "@/components";
import { LogOut } from "@/components/sidebar/log-out";

export default function DasnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex font-display h-dvh w-full">

      <SideBarDesktop/>

      <SideBarMobile/>

      <LogOut/>

      <main className="h-full w-full">

        {children}
        
      </main>

    </section>
  );
}





