import {Discriminator} from '../../dist/schema';

describe('OpenAPI Discriminator Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse discriminator1', () => {
    const contents = fs.readFileSync('examples/discriminator1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Discriminator.parse(data);
  });

  it('should parse discriminator2', () => {
    const contents = fs.readFileSync('examples/discriminator2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Discriminator.parse(data);
  });

  it('should parse discriminator3', () => {
    const contents = fs.readFileSync('examples/discriminator3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Discriminator.parse(data);
  });

});