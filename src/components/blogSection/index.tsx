// components/BlogSection.tsx
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  date: string;
  image: string;
  title: string;
  description: string;
}

export default function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      date: "14 Oct. 2024",
      image: "/blog/blog1.png",
      title: "Navigare Accesibila",
      description:
        "Navigare accesibilă către un Program transparent de angajare, am stabilit cu succes 4 parteneriate cu Agențiile Teritoriale pentru ocuparea forței de muncă",
    },
    {
      date: "07 Sep. 2024",
      image: "/blog/blog2.png",
      title: "Navigare Accesibila",
      description:
        "Navigare accesibilă către un Program transparent de angajare, am stabilit cu succes 4 parteneriate cu Agențiile Teritoriale pentru ocuparea forței de muncă",
    },
    {
      date: "28 Aug. 2024",
      image: "/blog/blog3.png",
      title: "Navigare Accesibila",
      description:
        "Navigare accesibilă către un Program transparent de angajare, am stabilit cu succes 4 parteneriate cu Agențiile Teritoriale pentru ocuparea forței de muncă",
    },
  ];

  return (
    <section className="px-4 py-16 bg-[#FAF9F6] ">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-center   mb-12">
          <span className="text-[#1a237e] text-4xl font-bold">Ultimele </span>
          <span className="text-purple-500 text-4xl font-bold">Noutati</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#1a237e] text-white px-4 py-1 rounded-full text-sm">
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#1a237e] text-xl font-semibold mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                <Link
                  href="#"
                  className="text-purple-500 hover:text-purple-700 font-medium text-sm"
                >
                  Afla Mai Mult
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
