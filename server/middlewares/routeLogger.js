const chalk = require("chalk")

module.exports=(req,res,next)=>{
    console.log(chalk.cyan(`[${req.method}] `) + chalk.yellow(req._parsedOriginalUrl.path));
    next();
}