import express from 'express';

import { logarUsuario, mostrarLivros, montarLista, devolucao, reservar, devolver, livrosAdmin, devolverLivro, voltarLivro, mostrarHistorico, mudarImg, createLivro, excluirLivro } from '../controllers/usuarios.js';

const router = express.Router();

router.get('/usuario/:ra&:senha', logarUsuario);

router.get('/livros', mostrarLivros);

router.get('/listaLivros/:id', montarLista);

router.get('/devolucao/:fk', devolucao);

router.patch('/reservar/:id&:fk', reservar);

router.patch('/devolver/:id', devolver);

router.get('/livrosAdmin', livrosAdmin);

router.patch('/devolverLivro/:id', devolverLivro);

router.patch('/voltarLivro/:id', voltarLivro);

router.get('/historico/:id', mostrarHistorico);

router.patch('/img/:img&:id', mudarImg);

router.post('/postLivro/:titulo&:autor&:data&:desc&:caminho&:isbn', createLivro);

router.delete('/deleteLivro/:id', excluirLivro)

export default router;