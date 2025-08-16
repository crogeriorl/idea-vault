import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-purple-600 h-[200px] flex justify-center items-center">
      <h1 className="text-2xl font-semibold  ml-10 ">
        Dê uma Olhada no projeto:
      </h1>
      <Image
        src="/images/QRCODE.png"
        alt=""
        width={200}
        height={200}
        className="p-6"
      />
    </div>
  );
}
