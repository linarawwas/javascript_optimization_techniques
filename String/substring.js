// string slicing

// substr(), substring(), slice()

// substr(): legacy code, don't use it, takes index start 
// and length, treats a negative index as an indicator to start from the end

// substring(): treats negative indices as 0,
//  if will always consider the less index as the start one
// slice : treats negative indices as starting in reverse order, 
// treats single arguments as the position of the first letter till the end