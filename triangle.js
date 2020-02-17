/* Looping a triangle
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
####### */

let hashTag = `#`;
for (let x = 0; x < 7; x ++) {
  console.log(hashTag);
  for (let y = 0; y < 1; y ++) {
    hashTag += `#`;
  }
}
