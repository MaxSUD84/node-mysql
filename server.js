import express from 'express';
import path from 'node:path';
import { cwd } from 'node:process';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './graphql/schema.js';
import resolver from './graphql/resolver.js';
// import todoRouter from './routes/todo.js';

class Index {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      express.static(
        path.join(cwd(), 'public')
        // , {
        //   dotfiles: 'ignore',
        //   etag: false,
        //   extensions: ['htm', 'html'],
        //   index: false,
        //   maxAge: '1d',
        //   redirect: true,
        //   setHeaders: function (res, path, stat) {
        //     res.set('x-timestamp', Date.now());
        //   },
        // }
      )
    );
    this.server.use(express.json());
    this.server.use(
      graphqlHTTP({
        schema: schema,
        rootValue: resolver,
        graphiql: true,
      })
    );
  }

  routes() {
    // this.server.use('/api/todo', todoRouter);
  }
}

export default new Index().server;
