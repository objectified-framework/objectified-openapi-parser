import {SecurityScheme} from '../../dist/src/schema';
import fs from 'fs';
import yaml from 'yaml';

describe('OpenAPI SecurityScheme Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse securityscheme1', () => {
    const contents = fs.readFileSync('examples/securityscheme1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = SecurityScheme.parse(data);
  });

  it('should parse securityscheme2', () => {
    const contents = fs.readFileSync('examples/securityscheme2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = SecurityScheme.parse(data);
  });

  it('should parse securityscheme3', () => {
    const contents = fs.readFileSync('examples/securityscheme3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = SecurityScheme.parse(data);
  });

  it('should parse securityscheme4', () => {
    const contents = fs.readFileSync('examples/securityscheme4.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = SecurityScheme.parse(data);
  });

});