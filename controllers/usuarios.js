import { getUsuario, getLivros, getLivrosLista, getLivrosDevolucao, updateFkUser, updateDisponivel, getLivrosVerificar, updateDevolucao, updateRecusarDevolucao, getHitorico, updateImg, postLivro, deleteLivro } from '../models/usuariosModel.js';

export const logarUsuario = (req, res) => {
  const ra = req.params.ra;
  const senha = req.params.senha;
  getUsuario(ra, senha, (err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.json(results)
    }
  })
}

export const mostrarLivros = (req, res) => {
  getLivros((err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
}

export const montarLista = (req, res) => {
  const id = req.params.id
  getLivrosLista(id, (err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
}

export const devolucao = (req, res) => {
  const fk = req.params.fk;
  getLivrosDevolucao(fk, (err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
}

export const reservar = (req, res) => {
  const id = req.params.id;
  const fk = req.params.fk;
  updateFkUser(id, fk, (err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
}

export const devolver = (req, res) => {
  const id = req.params.id;
  updateDisponivel(id, (err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
}

export const livrosAdmin = (req, res) => {
  getLivrosVerificar((err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
}

export const devolverLivro = (req, res) => {
  const id = req.params.id;
  updateDevolucao(id, (err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
}

export const voltarLivro = (req, res) => {
  const id = req.params.id;
  updateRecusarDevolucao(id, (err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
}

export const mostrarHistorico = (req, res) => {
  const id = req.params.id;
  getHitorico(id, (err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
}

export const mudarImg = (req, res) => {
  const img = req.params.img;
  const id = req.params.id;
  updateImg(img, id, (err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
}

export const createLivro = (req, res) => {
  const titulo = req.params.titulo;
  const autor = req.params.autor;
  const data = req.params.data;
  const desc = req.params.desc;
  const caminho = 'https://imgur.com/' + req.params.caminho;
  const isbn = req.params.isbn;
  postLivro(titulo, autor, data, desc, caminho, isbn, (err, results) => {
    if(err) {
      res.send(err);
    } else {
      res.json(results)
    }
  })
}

export const excluirLivro = (req, res) => {
  const id = req.params.id;
  deleteLivro(id, (err,results) => {
    if(err) {
      res.send(err);
    } else {
      res.json(results);
    }
  })
}