import {Responses} from '../../dist/src/schema';
import fs from 'fs';
import yaml from 'yaml';

describe('OpenAPI Responses Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse responses1', async () => {
    const contents = fs.readFileSync('examples/responses1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Responses.parse(data);
  });

  it('should parse responses2', async () => {
    const contents = fs.readFileSync('examples/responses2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Responses.parse(data);
  });

  it('should parse responses3', async () => {
    const contents = fs.readFileSync('examples/responses3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Responses.parse(data);
  });

});