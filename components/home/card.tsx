import { New } from "@/lib/types/New";

export default function Card({
  large,
  title,
  description,
  image,
  url,
  cover_image,
  user,
  published_at,
  type_of,
}: New) {
  const date = new Date(published_at).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const { profile_image, username } = user;

  return (
    <div
      className={`relative col-span-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div
        className="mx-auto flex h-full flex-col justify-between rounded-lg bg-white px-8 py-4 shadow-md "
        style={{ cursor: "auto" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 ">{date}</span>
          <a className="transform cursor-pointer rounded bg-gray-600 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 hover:bg-gray-500">
            {type_of}
          </a>
        </div>
        <div className="mt-2">
          <a
            href={url}
            className="text-2xl font-bold text-gray-700 hover:text-gray-600 hover:underline "
          >
            {title}
          </a>
          <p className="mt-2 text-gray-600 ">{description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <a href={url} className="text-blue-600 hover:underline ">
            Read more ⟶
          </a>
          <div className="flex items-center">
            <img
              src={profile_image}
              alt={username}
              className="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
            />
            <a className="cursor-pointer font-bold text-gray-700 ">
              {username}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
