import {Header} from '../../dist/src/schema';

describe('OpenAPI Contact Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse header1', async () => {
    const contents = fs.readFileSync('examples/header1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Header.parse(data);
  });

});