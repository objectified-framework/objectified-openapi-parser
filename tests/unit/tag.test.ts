import {Tag} from '../../dist/src/schema';

describe('OpenAPI Tag Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse tag1', async () => {
    const contents = fs.readFileSync('examples/tag1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Tag.parse(data);
  });

});