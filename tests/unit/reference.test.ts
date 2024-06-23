import {Reference} from '../../dist/src/schema';
import fs from 'fs';
import yaml from 'yaml';

describe('OpenAPI Reference Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse reference1', async () => {
    const contents = fs.readFileSync('examples/reference1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Reference.parse(data);
  });

  it('should parse reference2', async () => {
    const contents = fs.readFileSync('examples/reference2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Reference.parse(data);
  });

  it('should parse reference3', async () => {
    const contents = fs.readFileSync('examples/reference3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Reference.parse(data);
  });

});