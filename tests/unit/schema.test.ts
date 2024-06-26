import {Schema} from '../../dist/schema';

describe('OpenAPI Schema Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse schema1', () => {
    const contents = fs.readFileSync('examples/schema1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Schema.parse(data);
  });

  it('should parse schema2', () => {
    const contents = fs.readFileSync('examples/schema2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Schema.parse(data);
  });

  it('should parse schema3', () => {
    const contents = fs.readFileSync('examples/schema3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Schema.parse(data);
  });

  it('should parse schema4', () => {
    const contents = fs.readFileSync('examples/schema4.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Schema.parse(data);
  });

  it('should parse schema5', () => {
    const contents = fs.readFileSync('examples/schema5.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Schema.parse(data);
  });

  it('should parse schema6', () => {
    const contents = fs.readFileSync('examples/schema6.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Schema.parse(data);
  });

  it('should parse schema7', () => {
    const contents = fs.readFileSync('examples/schema7.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Schema.parse(data);
  });

  it('should parse schema8', () => {
    const contents = fs.readFileSync('examples/schema8.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Schema.parse(data);
  });

  it('should parse schema9', () => {
    const contents = fs.readFileSync('examples/schema9.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Schema.parse(data);
  });

  it('should parse schema10', () => {
    const contents = fs.readFileSync('examples/schema10.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Schema.parse(data);
  });

});