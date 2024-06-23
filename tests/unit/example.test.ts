import {Example} from '../../dist/src/schema';
import fs from 'fs';
import yaml from 'yaml';

describe('OpenAPI Contact Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse example1', async () => {
    const contents = fs.readFileSync('examples/example1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Example.parse(data);
  });

  it('should parse example2', async () => {
    const contents = fs.readFileSync('examples/example2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Example.parse(data);
  });

  it('should parse example3', async () => {
    const contents = fs.readFileSync('examples/example3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Example.parse(data);
  });

});