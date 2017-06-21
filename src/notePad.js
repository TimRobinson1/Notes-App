function NotePad() {
  this.notes = [];
}

NotePad.prototype.addNote = function(note) {
  this.notes.push(note);
}

NotePad.prototype.shortenString = function(string) {
  return string.substr(0, 20);
}
