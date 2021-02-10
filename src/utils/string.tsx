const isScramble = (scrambled: string, needle: string): boolean => {

  let isScrambled = true;
  let current = needle[ 0 ];
  let index = scrambled.indexOf( current );

    if ( index === -1 ) 
      return false;

    if ( needle.length > 1 ) {
      let dropout = scrambled.slice( 0, index ).concat( scrambled.slice( index + 1 ) );
      isScrambled = isScramble( dropout, needle.slice( 1 ) );
    }

  return isScrambled;
  
}

export default isScramble;