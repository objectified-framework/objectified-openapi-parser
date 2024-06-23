import {ServerVariable} from '../../dist/src/schema';
import fs from 'fs';
import yaml from 'yaml';

describe('OpenAPI ServerVariable Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse servervariable1', () => {
    const contents = fs.readFileSync('examples/servervariable1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = ServerVariable.parse(data);
  });

  it('should parse servervariable2', () => {
    const contents = fs.readFileSync('examples/servervariable2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = ServerVariable.parse(data);
  });

  it('should parse servervariable3', () => {
    const contents = fs.readFileSync('examples/servervariable3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = ServerVariable.parse(data);
  });

});