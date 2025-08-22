import AdminAuthGate from "@/components/Authgate/AdminAuthGate";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <AdminAuthGate>{children}</AdminAuthGate>;
}