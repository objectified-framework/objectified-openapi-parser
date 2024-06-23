import {Header} from '../../dist/schema/sub';

describe('OpenAPI Header Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse header1', () => {
    const contents = fs.readFileSync('examples/header1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Header.parse(data);
  });

});