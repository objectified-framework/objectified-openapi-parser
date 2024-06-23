import {Example} from '../../dist/schema';

describe('OpenAPI Example Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse example1', () => {
    const contents = fs.readFileSync('examples/example1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Example.parse(data);
  });

  it('should parse example2', () => {
    const contents = fs.readFileSync('examples/example2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Example.parse(data);
  });

  it('should parse example3', () => {
    const contents = fs.readFileSync('examples/example3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Example.parse(data);
  });

});