let connect = function(){
  if (global.connection){
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://fvkqalhq:k_V_TQm4EkvPmSP310-LcOUzAc7aQNFf@kesavan.db.elephantsql.com/fvkqalhq"
  });

  global.connection = pool;
  return pool.connect();
}

modele.exports = { connect }