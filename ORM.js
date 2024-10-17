import data from 'datastore';

export function findOne(id) {
  return data.find((d) => d.id === id);
}

export function create(body) {
  if (!body.limit) {
    body.limit = 10000;
  }
  if (!body.current) {
    body.current = 0;
  }

  data.push(body);
}

export function update(body, where) {
  const id = where.id;

  const foundUser = data.find((d) => d.id === id);
  foundUser.current = body.current;
}
