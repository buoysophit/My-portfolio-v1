import MyFavAnime from "@/components/myfavanime";

export const metadata = {
  title: "Anime",
  description: "Code by day, anime by night.",
};

export default function AnimePage() {
  return (
    <main>
      <MyFavAnime />
    </main>
  );
}
