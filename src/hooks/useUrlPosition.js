import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const mapLat = parseFloat(searchParams.get("lat"));
  const mapLng = parseFloat(searchParams.get("lng"));
  
  return [mapLat, mapLng]; // Return mapLat and mapLng
}
