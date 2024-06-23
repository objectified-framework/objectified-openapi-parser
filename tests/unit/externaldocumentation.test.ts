import {ExternalDocumentation} from '../../dist/src/schema';

describe('OpenAPI ExternalDocumentation Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse externaldocumentation', () => {
    const contents = fs.readFileSync('examples/externaldocumentation.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = ExternalDocumentation.parse(data);
  });

});