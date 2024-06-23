import {Callback} from '../../dist/src/schema';
import fs from 'fs';
import yaml from 'yaml';

describe('OpenAPI Callback Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse callback1', () => {
    const contents = fs.readFileSync('examples/callback1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Callback.parse(data);
  });

  it('should parse callback2', () => {
    const contents = fs.readFileSync('examples/callback2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Callback.parse(data);
  });

});