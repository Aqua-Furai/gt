import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden ">
      <div className="flex flex-row items-center justify-start">
      <Image 
      src="/koenigseggw.svg" 
      alt="Koenigsegg" 
      width={100} 
      height={100} />
      <h1 
      className="text-3xl 
      font-bold" 
      style={{ color: "white", fontStyle: "italic", fontWeight: "bold" }}>
        Koenigsegg
      </h1>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/sedair-spear.png"
          alt="Koenigsegg Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
