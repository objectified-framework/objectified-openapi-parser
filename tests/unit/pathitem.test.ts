import {PathItem} from '../../dist/schema';

describe('OpenAPI PathItem Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse pathitem1', () => {
    const contents = fs.readFileSync('examples/pathitem1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = PathItem.parse(data);
  });

});