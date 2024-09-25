import Link from "next/link";
import { Button } from "../button";

interface Image {
  url: string;
}

interface IPost {
  id?: number;
  documentId?: string;
  title?: string;
  phone: string;
  gmapsEmbedUrl?: string | null;
  isAvailable?: boolean;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  locale?: string | null;
  address?: string | null;
  lastUpdated?: string | null;
  rent?: number | null;
  currency: string | null;
  capacity: number;
  images: Image[] | null;
}

function Card({
  id,
  title,
  address,
  rent,
  currency,
  capacity,
  images,
  phone,
}: IPost) {
  // Use the first image from the images array, or a placeholder if no image exists
  const imageUrl =
    images && images.length > 0 ? images[0].url : "/placeholder.png";

  // Change "USD" to "$"
  const displayCurrency = currency === "USD" ? "$" : currency;
  const formattedContact = `https://wa.me/${phone!.replace("+", "")}`; // Replace '+' for WhatsApp URL format

  return (
    <div className="flex gap-5 bg-white w-full shadow-md rounded-lg overflow-hidden">
      <Link href={`/${id}`} className="flex-auto w-32 h-48">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={imageUrl}
          alt="Card Image"
        />
      </Link>
      <div className="flex-auto w-64 flex justify-between flex-col py-2">
        <h2 className="text-lg font-bold mb-2 text-gray-700">
          <Link href={`/${id}`}>{title}</Link>
        </h2>
        {address && (
          <p className="text-gray-400 text-sm flex items-center space-x-2">
            <img src="/pin.png" alt="" className="w-4 h-4" />
            <span>{address}</span>
          </p>
        )}
        {rent !== null && currency && (
          <p
            className={`text-xl font-light p-1 rounded w-fit ${
              rent === 0 ? "bg-green-200 text-green-700" : "bg-amber-300"
            }`}
          >
            {rent === 0 ? "Free" : `${displayCurrency} ${rent}`}
          </p>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Capacity: {capacity}</span>
          </div>
          <div className="flex items-center space-x-1 pr-2">
            <a
              href={formattedContact}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-end"
            >
              <Button>Send WhatsApp</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
