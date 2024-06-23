import {OAuthFlow} from '../../dist/schema';

describe('OpenAPI OAuthFlow Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse oauthflow1', () => {
    const contents = fs.readFileSync('examples/oauthflow1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = OAuthFlow.parse(data);
  });

  it('should parse oauthflow2', () => {
    const contents = fs.readFileSync('examples/oauthflow2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = OAuthFlow.parse(data);
  });

});