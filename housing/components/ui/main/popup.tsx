import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface DialogWithImagesProps {
  images?: string[];
}

export const DialogWithImages: React.FC<DialogWithImagesProps> = ({
  images,
}) => {
  return (
    <Dialog>
      <DialogTrigger>show Images</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Images</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {images && images.length > 0 && (
          <div>
            <h3>Images related to this action:</h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Related image ${index + 1}`}
                  style={{ maxWidth: "100%" }}
                />
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
