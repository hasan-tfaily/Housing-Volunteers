import axios from 'axios';

// Define a generic type for Strapi responses
interface StrapiResponse<T> {
  data: T[];
  meta?: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

class StrapiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // Fetch entries from Strapi with error handling and query params
  async getEntries<T>(
    collectionName: string, 
    queryParams?: Record<string, string | number | boolean>
  ): Promise<StrapiResponse<T>> {
    try {
      const response = await axios.get<StrapiResponse<T>>(`${this.baseUrl}/${collectionName}`, {
        params: queryParams,
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching entries from ${collectionName}:`, error);
      throw new Error('Failed to fetch entries from Strapi');
    }
  }
}

export default StrapiService;
