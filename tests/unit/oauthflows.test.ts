import {OAuthFlows} from '../../dist/schema';

describe('OpenAPI OAuthFlows Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse oauthflows1', () => {
    const contents = fs.readFileSync('examples/oauthflows1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = OAuthFlows.parse(data);
  });

});