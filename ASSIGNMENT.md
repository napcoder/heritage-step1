## exercise 1:

write some code that, giving an array of strings, returns the counter of those items where at least a char is repeated

["a","b","c"] -> 0

["a","b","cc"] -> 1

["ABC","deef","hi", "mnmn"] -> 2

["AABBCCDDDDD","123","xyz", "qwertt"] -> 2

["123a","1233","11", "tttttxxxxxzzzzz"] -> 3

## exercise 2:

You live in the city of Cartesia where all roads are laid out in a perfect grid.

You arrived ten minutes too early to an appointment,

so you decided to take the opportunity to go for a short walk.

The city provides its citizens with a Walk Generating App on their phones

- - every time you press the button it sends you an array of one-letter strings

representing directions to walk (eg. ['n', 's', 'w', 'e']).

You always walk only a single block for each letter (direction) and

you know it takes you one minute to traverse one city block,

so create a function that will return true if the walk the app gives

you will take you exactly ten minutes (you don't want to be early or late!)

and will, of course, return you to your starting point.

Return false otherwise.

Note: you will always receive a valid array containing a random assortment

of direction letters ('n', 's', 'e', or 'w' only).

It will never give you an empty array

(that's not a walk, that's standing still!).