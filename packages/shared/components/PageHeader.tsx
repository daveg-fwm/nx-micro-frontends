interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="text-center">
      <h1 className="text-6xl font-bold text-indigo-500">{title}</h1>
      <p className="mt-2 mb-8 text-2xl text-gray-500">Explore our collection of furry friends!</p>
    </header>
  );
}
