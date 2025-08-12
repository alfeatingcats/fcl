import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Repetitions",
  description: "Focu Repetitions page",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
