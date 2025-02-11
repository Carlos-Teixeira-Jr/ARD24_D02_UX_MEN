export enum PlantCategory {
  Indoor = "indoor",
  Outdoor = "outdoor",
  TerracyAndBalcony = "terracy & balcony",
  OfficeDesk = "office desk",
}

export interface ICreatePlantSelect {
  value: PlantCategory;
  label: string;
}

export interface IFormData {
  id?: string;
  name: string;
  subtitle: string;
  category: string;
  price: number;
  discountPercentage: number;
  description: string;
  img: string;
  highlighted: boolean;
}

export interface IFormDataPayload {
  id?: string;
  name: string;
  subtitle: string;
  category: string;
  price: number;
  discountPercentage: number;
  description: string;
  img: string;
  highlighted: boolean;
}