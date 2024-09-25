import StrapiService from '@/lib/strapi';
import qs from 'qs';
// Define a Server Action for fetching data





// Define a Server Action for fetching filtered data
export async function fetchFilteredData({
  filters = {},
  populate = "*",
  sort = { createdAt: "desc" },
  pagination = { page: 1, pageSize: 10 },
}): Promise<House[]> {
  // Build the query string dynamically
  const query = qs.stringify(
    {
      filters,
      populate,
      sort,
      pagination,
    },
    {
      encodeValuesOnly: true, // Prettify URL
    }
  );

  // Use HTTP explicitly for the API call
  const strapiService = new StrapiService('http://167.71.42.132/admin');
  const response = await strapiService.getEntries(`api/listing?${query}`);

  // Handle the response and ensure it matches the House[] type
  const data = response.data as House[];
  return data;
}


// Define the Image type
export interface Image {
    id: number;
    documentId: string;
    url: string;
  }
  
  // Define the Region type
  interface Region {
    id: number;
    documentId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
  }
  
  // Define the ListingType type
  interface ListingType {
    id: number;
    documentId: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    description: string | null;
  }
  
  // Define the House type
 // Define Localization type if you know its structure
interface Localization {
    id: number;
    locale: string;
    documentId: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }
  
  // Update the House type to use the Localization type
  export interface House {
    id: number;
    documentId: string;
    title: string;
    phone: string;
    gmapsEmbedUrl: string | null;
    isAvailable: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    address: string | null;
    lastUpdated: string | null;
    rent: number | null;
    currency: string | null;
    capacity: number;
    images: Image[] | null;
    region: Region | null;
    listing_type: ListingType | null;
    localizations: Localization[]; // More specific type for localizations
  }
  
  
  