import {SecurityRequirement} from '../../dist/schema';

describe('OpenAPI SecurityRequirement Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse securityrequirement1', () => {
    const contents = fs.readFileSync('examples/securityrequirement1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = SecurityRequirement.parse(data);
  });

  it('should parse securityrequirement2', () => {
    const contents = fs.readFileSync('examples/securityrequirement2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = SecurityRequirement.parse(data);
  });

});