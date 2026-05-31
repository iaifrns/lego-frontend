export interface CountType {
  sets: number;
  parts: number;
  inventory: number;
  invenoryPart: number;
  color: number;
  theme: number
}

export interface GraphDataType {
  color: string;
  data: [];
  bcolor?: string;
}

export interface StatDataListType {
    set: [],
    part: [],
    inventory: [],
    inventoryPart: []
}