import express from 'express';
import path from 'node:path';
import { cwd } from 'node:process';
// import todoRouter from './routes/todo.js';
import todoRouter from './routes/todo.js';

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
  }

  routes() {
    this.server.use('/api/todo', todoRouter);
    //this.server.use(routes);
  }
}

export default new Index().server;
