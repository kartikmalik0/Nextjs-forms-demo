import DealForm from "@/components/DealForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-3xl mx-auto flex-col items-center justify-between p-24">
      <DealForm />
    </main>
  );
}
