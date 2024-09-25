// import { fetchFilteredData, House } from "./data";
import Card from "../main/Card"; // Assuming the Card component is in the same directory

export const HousesPage = async () => {
  // const filters = { isAvailable: { $eq: true } }; // Example filter
  // const houses: House[] = await fetchFilteredData({
  //   filters,
  //   populate: "*",
  //   sort: { createdAt: "desc" },
  //   pagination: { page: 1, pageSize: 10 },
  // });

  return (
    <div className=" grid grid-cols-1 gap-5">
      {dummyHouses
        ? dummyHouses.map((house) => (
            <Card
              key={house.id}
              id={house.id}
              phone={house.phone}
              title={house.title}
              address={house.address ?? "No address provided"}
              rent={house.rent}
              currency={house.currency ?? "USD"}
              capacity={house.capacity}
              images={house.images ?? []} // Pass the images array or an empty array
            />
          ))
        : "No houses available"}
    </div>
  );
};

export const dummyHouses = [
  {
    id: 1,
    documentId: "doc123",
    title: "Modern Apartment in the City",
    phone: "555-1234",
    gmapsEmbedUrl: "https://maps.google.com/?q=40.712776,-74.005974",
    isAvailable: true,
    createdAt: "2024-09-10T12:00:00Z",
    updatedAt: "2024-09-12T14:00:00Z",
    publishedAt: "2024-09-11T10:00:00Z",
    locale: "en",
    address: "123 Main St, New York, NY",
    lastUpdated: "2024-09-12T14:00:00Z",
    rent: 0,
    currency: "USD",
    capacity: 4,
    images: [
      { url: "https://via.placeholder.com/150", documentId: "img1" },
      { url: "https://via.placeholder.com/150", documentId: "img2" },
    ],
  },
  {
    id: 2,
    documentId: "doc456",
    title: "Cozy Cottage in the Suburbs",
    phone: "555-5678",
    gmapsEmbedUrl: null,
    isAvailable: false,
    createdAt: "2024-08-15T09:00:00Z",
    updatedAt: "2024-08-16T12:00:00Z",
    publishedAt: "2024-08-16T11:00:00Z",
    locale: "en",
    address: "456 Oak St, Springfield, IL",
    lastUpdated: "2024-08-16T12:00:00Z",
    rent: 1500,
    currency: "USD",
    capacity: 2,
    images: [{ url: "https://via.placeholder.com/150", documentId: "img3" }],
  },
];
