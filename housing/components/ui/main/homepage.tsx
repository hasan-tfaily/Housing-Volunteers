"use client";

import { OurCard } from "./ourCard";

const sampleDataSet = {
  data: [
    {
      id: 3,
      documentId: "p7rcbk5yhv0us0m8gtbv5s0x",
      title: "House near me",
      phone: "+96171755848",
      gmapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13254.517680079929!2d35.513882962719734!3d33.84766629227747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1727171384644!5m2!1sen!2slb",
      location: "near whatever",
      isAvailable: true,
      images: [
        {
          id: 1,
          documentId: "iue5ha7paojvgxccz6eiqmux",
          url: "/uploads/img_1_1e54897ced.webp",
        },
      ],
    },
    {
      id: 4,
      documentId: "a7bcde9fhijklmnopq",
      title: "Apartment Downtown",
      phone: "+96178945612",
      gmapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13254.517680079929!2d35.513882962719734!3d33.84766629227747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1727171384644!5m2!1sen!2slb",
      location: "near downtown",
      isAvailable: true,
      images: [
        {
          id: 2,
          documentId: "jhgsf65hkls234mnf5ei",
          url: "/uploads/img_2_5abf69ced.webp",
        },
      ],
    },
    {
      id: 5,
      documentId: "m9nopqrstuv",
      title: "Villa Outside City",
      phone: "+96112345678",
      gmapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13254.517680079929!2d35.513882962719734!3d33.84766629227747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slb!4v1727171384644!5m2!1sen!2slb",
      location: "far away",
      isAvailable: false, // Not available
      images: [
        {
          id: 3,
          documentId: "mnoxyz123",
          url: "/uploads/img_3_6abcdef.webp",
        },
      ],
    },
  ],
};

export const HomePage = () => {
  return (
    <div className="grid grid-cols-1 gap-5 bg-gray-200 p-5 rounded-lg">
      {sampleDataSet.data
        .filter((item) => item.isAvailable) // Only show available items
        .map((item) => (
          <OurCard
            key={item.id}
            title={item.title}
            capacity={10} // assuming a default or specific capacity
            contact={item.phone}
            images={item.images} // pass the images array if available
          />
        ))}
    </div>
  );
};
