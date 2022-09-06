import db from '../config/databse.js'

export const getUsuario = (ra, senha, result) => {
  db.query('select * from usuarios where ra = ? and senha = ?', [ra, senha], (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  })
}

export const getLivros = (result) => {
  db.query('select * from livros', (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  })
}

export const getLivrosLista = (id, result) => {
  db.query('select * from livros where id = ?', [id], (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  })
}

export const getLivrosDevolucao = (fk, result) => {
  db.query('select * from livros where fkUsuario = ? and disponibilidade = "amarelo" or disponibilidade = "vermelho"', [fk], (err, results) => {
    if(err) {
      console.log(err);
      result(err, null)
    } else {
      result(null, results);
    }
  })
}

export const updateFkUser = (id, fk, result) => {
  db.query('update livros set fkUsuario = ?,  disponibilidade = "vermelho" where id = ?', [id, fk], (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      insertHistorico(id, fk);
      result(null, results);
    }
  })
}

const insertHistorico = (id, fk) => {
  db.query('insert into historico(fkUsuario, fkLivro) values (?, ?)', [id, fk], (err) => {
    if(err) {
      console.log(err);
    }''
  })
}

export const updateDisponivel = (id, result) => {
  db.query('update livros set disponibilidade = "amarelo" where id = ?', [id], (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  })
}

export const getLivrosVerificar = (result) => {
  db.query('select * from livros where disponibilidade = "amarelo"', (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  })
}

export const updateDevolucao = (id, result) => {
  db.query('update livros set fkUsuario = 1, disponibilidade = "verde" where id = ?', [id], (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  })
}

export const updateRecusarDevolucao = (id, result) => {
  db.query('update livros set disponibilidade = "vermelho" where id = ?', [id], (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  })
}

export const getHitorico = (id, result) => {
  db.query('select livros.* from historico join livros on fkLivro = livros.id where historico.fkUsuario = ?;', [id], (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  })
}

export const updateImg = (img, id, result) => {
  db.query('update usuarios set img = ? where id = ?', [img, id], (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  })
}

export const postLivro = (titulo, autor, data, desc, caminho, isbn, result) => {
  db.query('insert into livros(nome, autor, dataPublic, descricao, disponibilidade, caminho, isbn) value (?, ?, ?, ?, "verde", ?, ?)', [titulo, autor, data, desc, caminho, isbn], (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results)
    }
  })
}

export const deleteLivro = (id, result) => {
  db.query('delete from livros where id = ?', [id], (err, results) => {
    if(err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results)
    }
  })
}