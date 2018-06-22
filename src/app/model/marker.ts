// just an interface for type safety.
export interface Marker {
    lat: number;
    lng: number;
    label?: string;
    content?: string;
    draggable: boolean;
  }
