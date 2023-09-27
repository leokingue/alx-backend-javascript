const task = 'I prefer const when I can.';

export function taskFirst() {
  return task;
}

export function getLast() {
  return ' is okay';
}

let combination = 'But sometimes let';
export function taskNext() {
  combination += getLast();

  return combination;
}
