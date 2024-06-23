import {Link} from '../../dist/schema';

describe('OpenAPI Contact Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse link1', () => {
    const contents = fs.readFileSync('examples/link1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Link.parse(data);
  });

  it('should parse link2', () => {
    const contents = fs.readFileSync('examples/link2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Link.parse(data);
  });

  it('should parse link3', () => {
    const contents = fs.readFileSync('examples/link3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Link.parse(data);
  });

  it('should parse link4', () => {
    const contents = fs.readFileSync('examples/link4.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Link.parse(data);
  });

});