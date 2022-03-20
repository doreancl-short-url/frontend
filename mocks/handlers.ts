import {rest} from 'msw'

const API_URL = "http://host.docker.internal:8080"
const jsonData = [
  {
    id: '1000000000001',
    title: 'mi linkedin',
    link: '/scoppiap',
    long_url: 'https://www.linkedin.com/in/scoppia/',
    is_active: 1,
    created_at: new Date().toJSON(),
  }, {
    id: '1000000000002',
    title: 'mi linkedin 2',
    link: '/scoppiap2',
    is_active: 0,
    long_url: 'https://www.linkedin.com/in/scoppia/',
    created_at: new Date().toJSON(),
  },
];

const _handlers = [
  rest.get(API_URL + '/link/', (req, res, ctx) => {
    return res(
      ctx.json(jsonData)
    )
  }),
  rest.put(API_URL + '/link/:id', (req, res, ctx) => {
    return res(
      ctx.json(jsonData[0])
    )
  })
]

for (const link of jsonData) {
  _handlers.push(
    rest.get(API_URL + '/link/' + link.id, (req, res, ctx) => {
      return res(
        ctx.json(link)
      )
    })
  )
}

export const handlers = _handlers;

