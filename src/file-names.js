const { NotImplementedError } = require( '../extensions/index.js' );

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( files ) {
  fileNames = {};
  outFiles = [];
  for ( const file of files ) {
    outFiles.push( getNameFile( file ) );
  }
  return outFiles;

  function getNameFile( nameFile ) {
    if ( fileNames.hasOwnProperty( nameFile ) ) {
      fileNames[nameFile] += 1;
      fileNames[`${ nameFile }(${ fileNames[nameFile] })`] = 0;
      return `${ nameFile }(${ fileNames[nameFile] })`;
    } else {
      fileNames[nameFile] = 0;
      return `${ nameFile }`;
    }
  }
}
module.exports = {
  renameFiles
};
