import axios, { AxiosInstance } from 'axios';

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
  async getEntry(collectionName: string, id: number) {
    try {
      const response = await this.client.get(`/${collectionName}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching data from Strapi:`, error);
      throw error;
    }
  }

  // Method to get all entries from a collection
  async getEntries(collectionName: string, queryParams?: Record<string, any>) {
    try {
      const response = await this.client.get(`/${collectionName}`, {
        params: queryParams,
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching data from Strapi:`, error);
      throw error;
    }
  }

  // Method to post data to Strapi (if needed)
  async createEntry(collectionName: string, data: Record<string, any>) {
    try {
      const response = await this.client.post(`/${collectionName}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error creating entry in Strapi:`, error);
      throw error;
    }
  }
}

export default StrapiService;
