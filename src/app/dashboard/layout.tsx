import { SideBarDesktop, SideBarMobile } from "@/components";
import { LogOut } from "@/components/sidebar/log-out";
import { auth } from "@/lib";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DasnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(!session) {
    redirect("/login")
  }

  return (
    <section className="flex font-display h-dvh w-full">

      <SideBarDesktop/>

      <SideBarMobile/>

      <LogOut/>

      <main className="flex-1 overflow-y-auto">

        {children}
        
      </main>

    </section>
  );
}





