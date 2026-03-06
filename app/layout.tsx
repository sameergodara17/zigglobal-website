export const metadata = {
  title: "Zig Global",
  description: "UAE Company Formation Services"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{margin:0,background:"#000"}}>
        {children}
      </body>
    </html>
  );
}
