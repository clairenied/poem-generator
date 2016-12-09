const express = require('express');
const app = express();
const chalk = require('chalk')
const path = require('path')

const morgan = require('morgan');
const nunjucks = require('nunjucks');

const bodyParser = require('body-parser');
const routes = require('./routes/');

const models = require('./models')

app.use(morgan('tiny'));

// body parser for form input
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static('public'))


models.poemDb.sync({ 
	// force: true 
})
.then(function () {
  app.listen(3000, function () {

    console.log(chalk.cyan(`
    
      
                             /|\\
                           //   \\\\           ) )
                         //       \\\\        ( (
                       //           \\\\       ) ) 
                     //               \\\\   ______    
                   //                   \\\\ |__|_|
                 //                       \\\\_|__|
               //        ____________       \\\\|_|      
             //          |__________|         \\\\|
           //            ||   ||   ||           \\\\                          OOOOOOOOOOOO
         //              ||===||===||             \\\\                       OOOOOOOOOOOOOO
       //                ||___||___||               \\\\                    OOOOOOOOOOOOOOOO
     //                  |__________|                 \\\\                  OOOOOOOOOOOOOOOO
   //                                                   \\\\    /|_/|       OOOOOOOOOOOOOOOO
 //|                     ____________     ____________   |\\\\ /o o |       OOOOOOOOOOOOOOOO
   |          o          |__________|     |__________|   |  /     |        OOOOOOOOOOOOOO
   |        __|__        ||        ||     ||   ||   ||   | (oo__  |         OOOOOOOOOOOO
   |       | o o |       ||        ||     ||   ||   ||   |    |   |             XXXX
   |     o-| === |-o     ||        ||     ||===||===||   |    |   |             XXXX
   |       |_____|       ||        ||     ||   ||   ||   |    |   |____________/|XXX
   |    _  /|. .|\\  _    ||       O||     ||___||___||   |    |                 |XXX
...|     \\/ | . | \\/     ||        ||     |__________|   |....|                x|XXX......
...|        |___|        ||        ||                    |....|                 |XXX......
...|        |+++|        ||        ||                    |....|   ___________)  |XXX......
...|        |+++|        ||        ||                    |....|  | |.......| |  |XXX......
...|........|+|+|........||________||....................|....|  | |.......| |  |XXX......
.............|.|..............................................|  |o|.......|o|  |.........
............oo.oo.............................................|oo|...........|oo|.........
..........................................................................................   
.......................................................................................... 
..........................................................................................`));
  console.log(chalk.green('App listening on port 3000'))
  });
})
.catch(console.error);

app.use('/api', require('./routes'))

app.get('/*', function(req, res, next){
	res.sendFile(path.join(__dirname, "../browser/index.html"))
})

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});
