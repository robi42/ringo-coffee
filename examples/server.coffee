exports.app = (req) ->
  status: 200
  headers:
    'Content-Type': 'text/plain'
  body: ['Hello World!']

if require.main is module
  require('ringo/httpserver').main module.id
