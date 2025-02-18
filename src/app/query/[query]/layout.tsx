export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="w-full flex items-center justify-center bg-graymercado">{children}</main>;
}
