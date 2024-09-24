import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface OurCardProps {
  title: string;
  capacity: number;
  contact: string;
}

export const OurCard: React.FC<OurCardProps> = ({
  title,
  capacity,
  contact,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <p>Capacity: {capacity}</p>
          <p>People Contact: {contact}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
