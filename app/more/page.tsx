import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screenp-24 items-center justify-center gap-4">
      <Image src="/koenigseggb.svg" alt="Koenigsegg" width={100} height={100} />
      <h1 className="text-3xl font-bold">Koenigsegg</h1>
    </div>
  );
}
