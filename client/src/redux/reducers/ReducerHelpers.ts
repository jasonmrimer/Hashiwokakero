import {
  flipVerticallyAroundCenterOf,
  rotate180AroundCenterOf
} from '../../shared-graphic-components/visual-grapher/GraphTranslator';
import { HashiPoint } from '../../hashi-solver/HashiPoint';

export const staticHashiMap = () => {
  let map: HashiPoint[] = [];

  map.push(new HashiPoint(0, 0, 3));
  map.push(new HashiPoint(0, 3, 2));
  map.push(new HashiPoint(1, 1, 3));
  map.push(new HashiPoint(1, 6, 3));
  map.push(new HashiPoint(2, 0, 2));
  map.push(new HashiPoint(3, 2, 1));
  return map;
};

export function translateCoordinateTextToGraphReadyPoints(mapText: string) {
  let lines = mapText.split('\n');
  let validCityAndCoordinates = lines.filter((line: string) => {
    return line.split(' ').length === 3;
  });
  let points = validCityAndCoordinates.map((textColumn: string) => {
    let cityAndCoordinates = textColumn.split(' ');
    return {
      name: cityAndCoordinates[0],
      x: parseFloat(cityAndCoordinates[1]),
      y: parseFloat(cityAndCoordinates[2])

    };
  });

  return flipVerticallyAroundCenterOf(
    rotate180AroundCenterOf(points)
  );
}

export const serializeJSONToHashiMap = (body: any): HashiPoint[] => {
  let hashiPoints: HashiPoint[] = [];
  body.islands.map((island: any) => {
    hashiPoints.push(new HashiPoint(
      island.coordinates.x,
      island.coordinates.y,
      island.population
    ))
  });
  return hashiPoints;
};