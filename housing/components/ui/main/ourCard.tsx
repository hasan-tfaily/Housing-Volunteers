import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DialogWithImages } from "./popup";
import { Button } from "../button";

interface Image {
  url: string;
}

interface OurCardProps {
  title: string;
  capacity: number;
  contact: string;
  images?: Image[];
}

export const OurCard: React.FC<OurCardProps> = ({
  title,
  capacity,
  contact,
  images,
}) => {
  const formattedContact = `https://wa.me/${contact.replace("+", "")}`; // Replace '+' for WhatsApp URL format

  return (
    <Card className="w-96 p-4 space-y-4" key={"1"}>
      <CardHeader className="space-y-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="space-y-1">
          <div>
            <p>Capacity: {capacity}</p>
            <p>People Contact: {contact}</p>
          </div>
        </CardDescription>
        <a
          href={formattedContact}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center mt-4"
        >
          <Button>Send WhatsApp</Button>
        </a>
        {images && images.length > 0 && (
          <DialogWithImages images={images.map((img) => img.url)} />
        )}
      </CardHeader>
    </Card>
  );
};
