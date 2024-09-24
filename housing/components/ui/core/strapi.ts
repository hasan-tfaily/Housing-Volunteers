import axios, { AxiosInstance } from 'axios';

// Define a type for the image structure
interface StrapiImage {
    id: number;
    url: string;
  }
  
  // Define a type for the house entity
  interface House {
    id: number;
    title: string;
    phone: string;
    images: StrapiImage[];
  }
  
  // Define a generic type for Strapi responses
  interface StrapiResponse<T> {
    data: T[];
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }
  

  // Updated StrapiService class
  class StrapiService {
    private baseUrl: string;
    private client: AxiosInstance;
  
    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
      this.client = axios.create({
        baseURL: this.baseUrl,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  
    // Method to get a single entry from Strapi by collection name and ID
    async getEntry<T>(collectionName: string, id: number): Promise<T> {
      try {
        const response = await this.client.get<{ data: T }>(`/${collectionName}/${id}`);
        return response.data.data;
      } catch (error) {
        console.error(`Error fetching data from Strapi:`, error);
        throw error;
      }
    }
  
    // Method to get all entries from a collection
    async getEntries<T>(collectionName: string, queryParams?: Record<string, any>): Promise<StrapiResponse<T>> {
      try {
        const response = await this.client.get<StrapiResponse<T>>(`/${collectionName}`, {
          params: queryParams,
        });
        return response.data;
      } catch (error) {
        console.error(`Error fetching data from Strapi:`, error);
        throw error;
      }
    }
  
    // Method to post data to Strapi (if needed)
    async createEntry<T>(collectionName: string, data: T): Promise<T> {
      try {
        const response = await this.client.post<{ data: T }>(`/${collectionName}`, data);
        return response.data.data;
      } catch (error) {
        console.error(`Error creating entry in Strapi:`, error);
        throw error;
      }
    }
  }
  
  export default StrapiService;
  