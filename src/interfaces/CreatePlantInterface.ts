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