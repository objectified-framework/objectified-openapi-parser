import {Response} from '../../dist/schema/sub';

describe('OpenAPI Response Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse response1', () => {
    const contents = fs.readFileSync('examples/response1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Response.parse(data);
  });

  it('should parse response2', () => {
    const contents = fs.readFileSync('examples/response2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Response.parse(data);
  });

  it('should parse response3', () => {
    const contents = fs.readFileSync('examples/response3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Response.parse(data);
  });

  it('should parse response4', () => {
    const contents = fs.readFileSync('examples/response4.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Response.parse(data);
  });

});