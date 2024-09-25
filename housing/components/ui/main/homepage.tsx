import { fetchFilteredData, House } from "./data";

export const HousesPage = async () => {
  const filters = { isAvailable: { $eq: true } }; // Example filter
  const houses: House[] = await fetchFilteredData({
    filters,
    populate: "*",
    sort: { createdAt: "desc" },
    pagination: { page: 1, pageSize: 10 },
  });

  return (
    <div>
      {houses
        ? houses.map((house: House) => (
            <div key={house.id}>
              <h2>{house.title}</h2>
              <p>{house.address ?? "No address provided"}</p>
              <p>{house.isAvailable ? "Available" : "Not Available"}</p>
              {house.images && house.images.length > 0 && (
                <img
                  src={house.images[0].url}
                  alt={house.images[0].documentId}
                />
              )}
            </div>
          ))
        : ""}
    </div>
  );
};
