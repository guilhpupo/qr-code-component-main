import type { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "QR Code Component Main" }];
};

export default function Index() {
  return (
    <main className="flex min-h-screen  content-center items-center bg-slate-200 ">
      <section className="flex flex-col items-center space-y-4 p-3 pb-8 mx-auto bg-white shadow-md rounded-2xl">
        <img src="image-qr-code.png" alt="An QR Code" className="w-60 rounded-xl" />
        <h1 className="max-w-[15rem] text-center font-bold text-lg leading-tight ">Improve your front-end skills by building projects</h1>
        <p className="max-w-[15rem] text-center text-sm text-gray-400">Scan the QR Code to visit Frontend Mentor and take your coding skills to the next level</p>
      </section>
    </main>
  );
}
