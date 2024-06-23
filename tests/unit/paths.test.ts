import {Paths} from '../../dist/src/schema';

describe('OpenAPI Paths Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse paths1', async () => {
    const contents = fs.readFileSync('examples/paths1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Paths.parse(data);
  });

});