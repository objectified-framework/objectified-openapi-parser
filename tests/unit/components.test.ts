import {Components} from '../../dist/schema';

describe('OpenAPI Components Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse components1', () => {
    const contents = fs.readFileSync('examples/components1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Components.parse(data);
  });

});