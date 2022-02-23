const db = requere("../db")

class Autor = {
 static async inserir(){
    const connect = await db.connect();
    return await connect.query("SELECT * FROM autores");
  }
  static selecionar(){

  }
  static deletar(){

  }
  static atualizar(){

  }
}

module.exports = Autor;