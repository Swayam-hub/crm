import { Header } from "@/components/global/Header/Header";
import { KillBackground } from "@/components/global/Background/KillBackground";
import SmoothScroll from "@/components/providers/SmoothScroll";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <KillBackground />
      <Header />
      <SmoothScroll>
        <main>{children}</main>
      </SmoothScroll>
    </div>
  );
}