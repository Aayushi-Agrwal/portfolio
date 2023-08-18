function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="text-white bg-[#2A2F4F] h-screen w-full fixed">
      {children}
    </main>
  );
}

export default PageLayout;
