import {Encoding} from '../../dist/schema';

describe('OpenAPI Encoding Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse encoding1', () => {
    const contents = fs.readFileSync('examples/encoding1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Encoding.parse(data);
  });

  it('should parse encoding2', () => {
    const contents = fs.readFileSync('examples/encoding2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Encoding.parse(data);
  });

});