import {RequestBody} from '../../dist/src/schema';
import fs from 'fs';
import yaml from 'yaml';

describe('OpenAPI RequestBody Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse requestbody1', async () => {
    const contents = fs.readFileSync('examples/requestbody1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = RequestBody.parse(data);
  });

  it('should parse requestbody2', async () => {
    const contents = fs.readFileSync('examples/requestbody2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = RequestBody.parse(data);
  });

});