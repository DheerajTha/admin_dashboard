import Link from "next/link";

const Templates = () => {
  return (
    <div className="flex gap-4">
      <Link href="/templates/one">One</Link>
      <Link href="/templates/two">Two</Link>
    </div>
  );
};

export default Templates;