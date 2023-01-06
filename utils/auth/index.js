const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
// Importar otras estrategias que se usarán aquí

passport.use(LocalStrategy);