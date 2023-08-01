import Image from "next/image";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 dark:border-slate-500 drop-shadow-xl  rounded-full mx-auto mt-8"
        src="/images/profilepic.png"
        width={150}
        height={150}
        alt="Nikhil Jha"
        priority={true}
      />
    </section>
  );
}
