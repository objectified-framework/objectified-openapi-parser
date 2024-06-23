import {MediaType} from '../../dist/src/schema';
import fs from 'fs';
import yaml from 'yaml';

describe('OpenAPI MediaType Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse mediatype1', () => {
    const contents = fs.readFileSync('examples/mediatype1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = MediaType.parse(data);
  });

  it('should parse mediatype2', () => {
    const contents = fs.readFileSync('examples/mediatype2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = MediaType.parse(data);
  });

  it('should parse mediatype3', () => {
    const contents = fs.readFileSync('examples/mediatype3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = MediaType.parse(data);
  });

  it('should parse mediatype4', () => {
    const contents = fs.readFileSync('examples/mediatype4.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = MediaType.parse(data);
  });

  it('should parse mediatype5', () => {
    const contents = fs.readFileSync('examples/mediatype5.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = MediaType.parse(data);
  });

});