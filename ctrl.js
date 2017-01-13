#!/usr/bin/env node

var program = require('commander');
var shell = require('shelljs');
var _ = require('underscore')
 
program
  .version('0.0.1')
  .option('-C, --chdir <path>', 'change the working directory')
 
program
  .command('duplicate <full-file-path>')
  .alias('dup')
  .description('Duplicate the file in the path with the count provided')
  .option("-c, --count [no]", "Number of copies default to 1",[1])
  .action(function(env, options){
    var copies = options.count || 1 ;
    filepath = env.split(".");
    for(rep = 0; rep < copies ; rep++){
      shell.cp(env, filepath[0] + '_' + rep + '.'+ filepath[1] );
    }
    console.log('The file in location %s is duplicated %s time', filepath, copies);
  }); 

program.parse(process.argv);