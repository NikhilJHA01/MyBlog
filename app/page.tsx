import Posts from "./components/Posts";

export const revalidate = 10;

export default function Home() {
  return (
    <main className="p-6 mx-auto">
      <p className="mt-6 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Nikhil</span>.
        </span>
      </p>
      <Posts />
    </main>
  );
}
