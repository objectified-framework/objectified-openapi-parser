import {Contact} from '../../dist/src/schema';

describe('OpenAPI Contact Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse contact', () => {
    const contents = fs.readFileSync('examples/contact.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Contact.parse(data);
  });

});