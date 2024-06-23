import {XML} from '../../dist/schema';

describe('OpenAPI Contact Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse xml1', () => {
    const contents = fs.readFileSync('examples/xml1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = XML.parse(data);
  });

  it('should parse xml2', () => {
    const contents = fs.readFileSync('examples/xml2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = XML.parse(data);
  });

  it('should parse xml3', () => {
    const contents = fs.readFileSync('examples/xml3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = XML.parse(data);
  });

  it('should parse xml4', () => {
    const contents = fs.readFileSync('examples/xml4.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = XML.parse(data);
  });

  it('should parse xml5', () => {
    const contents = fs.readFileSync('examples/xml5.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = XML.parse(data);
  });

  it('should parse xml6', () => {
    const contents = fs.readFileSync('examples/xml6.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = XML.parse(data);
  });

});