import {Response} from '../../dist/src/schema';
import fs from 'fs';
import yaml from 'yaml';

describe('OpenAPI Response Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse response1', async () => {
    const contents = fs.readFileSync('examples/response1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Response.parse(data);
  });

  it('should parse response2', async () => {
    const contents = fs.readFileSync('examples/response2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Response.parse(data);
  });

  it('should parse response3', async () => {
    const contents = fs.readFileSync('examples/response3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Response.parse(data);
  });

  it('should parse response4', async () => {
    const contents = fs.readFileSync('examples/response4.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Response.parse(data);
  });

});