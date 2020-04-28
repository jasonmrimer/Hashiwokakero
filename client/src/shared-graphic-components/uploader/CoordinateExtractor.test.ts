import CoordinateExtractor from './CoordinateExtractor';

describe('CoordinateExtractor', () => {
  const fileText = 'NAME: concorde6\n' +
    'TYPE: TSP\n' +
    'COMMENT: Generated by CCutil_writetsplib\n' +
    'COMMENT: Write called for by Concorde GUI\n' +
    'DIMENSION: 6\n' +
    'EDGE_WEIGHT_TYPE: EUC_2D\n' +
    'NODE_COORD_SECTION\n' +
    '1 30.147059 79.746835\n' +
    '2 45.996732 78.270042\n' +
    '3 61.192810 78.270042\n' +
    '4 60.049020 48.734177\n' +
    '5 43.545752 49.156118\n' +
    '6 30.228758 51.476793';

  it('should return a string of coordinates separated by commas and new lines', () => {
    expect(CoordinateExtractor(fileText)).toBe(
      '1 30.147059 79.746835\n' +
      '2 45.996732 78.270042\n' +
      '3 61.192810 78.270042\n' +
      '4 60.049020 48.734177\n' +
      '5 43.545752 49.156118\n' +
      '6 30.228758 51.476793'
    );
  });
});

export default function () {

}