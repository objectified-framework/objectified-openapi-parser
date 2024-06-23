import {Parameter} from '../../dist/src/schema';
import fs from 'fs';
import yaml from 'yaml';

describe('OpenAPI Parameter Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse parameters1', () => {
    const contents = fs.readFileSync('examples/parameters1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Parameter.parse(data);
  });

  it('should parse parameters2', () => {
    const contents = fs.readFileSync('examples/parameters2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Parameter.parse(data);
  });

  it('should parse parameters3', () => {
    const contents = fs.readFileSync('examples/parameters3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Parameter.parse(data);
  });

  it('should parse parameters4', () => {
    const contents = fs.readFileSync('examples/parameters4.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Parameter.parse(data);
  });

  it('should parse parameters5', () => {
    const contents = fs.readFileSync('examples/parameters5.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Parameter.parse(data);
  });

});