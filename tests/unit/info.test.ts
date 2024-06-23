import {Info} from '../../dist/src/schema';

describe('OpenAPI Info Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse info', () => {
    const contents = fs.readFileSync('examples/info.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Info.parse(data);
  });

});