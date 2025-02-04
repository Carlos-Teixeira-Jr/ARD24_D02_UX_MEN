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

export interface IFormDataPayload {
  name: string;
  subtitle: string;
  category: PlantCategory;
  price: number;
  discountPercentage: number;
  description: string;
  img: string;
  highlighted: boolean;
}